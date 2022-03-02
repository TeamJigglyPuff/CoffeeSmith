const db = require('../models/coffeeModel')

const orderController = {};


orderController.addOrder = async (req, res, next) => {
  const str = 'INSERT INTO orders(user_id, title, price, order_date) VALUES($1, $2, $3, $4) RETURNING *'
  const data = [
    req.body.userId,
    req.body.title,
    req.body.price,
    req.body.orderDate
  ];

  try {
    const response = await db.query(str, data);
    const order = response.rows[0];
    res.locals.order = order;
  } catch(e) {
    return next({
      log: 'addOrder:' + e,
      message: { err: e }
    })
  }

  const coffees = req.body.coffees;

  for (const coffee of coffees) {
    const str = 'INSERT INTO bundles(order_id, coffee_id) VALUES($1, $2) RETURNING *';
    const data = [res.locals.order.order_id, coffee._id];

    try {
      await db.query(str, data);
    } catch(e) {
      return next({
        log: 'addBundle:' + e,
        message: { err: e }
      })
    }
  }
  return next();
}

module.exports = orderController;