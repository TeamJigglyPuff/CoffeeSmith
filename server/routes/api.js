const express = require('express');
const { verifyToken } = require("../middleware/auth");

const usersController = require('../controllers/usersController');
const coffeeController = require('../controllers/coffeeController');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post("/order",
  orderController.addOrder,
  (req, res) => {
    return res.status(200).json(res.locals.order);
  }
)

router.get("/users",
  verifyToken,
  usersController.getAllUsers,
  (req, res) => {
    return res.status(200).json(res.locals.users);
  }
)

router.get("/login", 
  usersController.logInUser,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
)

router.post("/register",
  usersController.register,
  (req, res) => {
    return res.status(201).json(res.locals.user);
});

router.get('/',
  verifyToken,
  coffeeController.getAllCoffee,
  (req, res) => {
    return res.status(200).json(res.locals.coffees);
  }
);

router.get('/:id',
  verifyToken,
  coffeeController.getCoffee,
  (req, res) => res.status(200).json(res.locals.coffee)
);

router.post('/',
  verifyToken,
  coffeeController.addCoffee,
  (req, res) => res.status(200).json(res.locals.insertedCoffee)
);

router.put('/:id',
  verifyToken,
  coffeeController.updateCoffee,
  (req, res) => res.status(200).json(res.locals.updatedCoffee)
);

router.delete('/:id',
  verifyToken,
  coffeeController.deleteCoffee,
  (req, res) => res.status(200).json('Succesfully deleted coffee entity')
);

module.exports = router;