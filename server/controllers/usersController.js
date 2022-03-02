require("dotenv").config();
const db = require('../models/coffeeModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersController = {};

usersController.getAllUsers = async (req, res, next) => {
  try {
    const str = 'SELECT * FROM users';
    const dbRes = await db.query(str);
    console.log(dbRes.rows);

    res.locals.users = dbRes.rows;
    return next()
  } catch(e) {
    return next({
      log: 'usersController.getAllUsers: ERROR: Error getting coffee data from database',
      message: { err: 'Error occured in usersController.getAllUsers. Check server logs for more details'}
    })
  }
}

usersController.register = async (req, res, next) => {
  // Our register logic starts here
  try {
    // Get user input
    const { firstName, lastName, email, password, auth, joindate, address, city, state, subscription, admin } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      console.log(req.body);
      res.status(400).send("All input is required");
    }

    // check if user already exist
    const str = 'SELECT * FROM users WHERE email = $1';
    const values = [email]

    const oldUser = await db.query(str, values);

    if (oldUser.rows[0]) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our databasea
    const text = 'INSERT INTO users(firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const userValues = [
      firstName,
      lastName,
      email,
      encryptedUserPassword
    ];

    const response = await db.query(text, userValues)
    const user = response.rows[0];
    
    // Create token
    const token = jwt.sign(
      { user_id: user.user_id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    user.token = token;
    // save user token
    res.locals.user = user;
    return next();

  }catch (err) {
    return next({
        status: 400,
        log: 'usersController.logInUser: ERROR: Invalid Credentials',
        message: { err: 'Error occurred in usersController.logInUser. Check sever logs for more details' }
      });
  }
}

usersController.logInUser = async (req, res, next) => {
   try {
    const { email, password } = req.body;

    // Validate user input
    if (!(email)) {
      return next({
        status: 400,
        log: 'usersController.logInUser: ERROR: Error improper email or password',
        message: { err: 'Error occurred in usersController.logInUser. Error improper email or password'}
      })
    }
    // Validate if user exist in our database
    const str = 'Select * from users WHERE email = $1';
    const values = [email];
    const response = await db.query(str, values);
    const user = response.rows[0];

    if (!user) {
      return next({
        status: 400,
        log: 'usersController.logInUser: ERROR: Error user does not exist',
        message: { err: 'Error occurred in usersController.logInUser. User does not exist'}
      })
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user.user_id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      
      // save user token
      user.token = token;
      res.locals.user = user;
      return next();
    }
  } catch(e) {
    return next({
      status: 400,
      log: 'usersController.logInUser: ERROR: ' + e,
      message: { err: 'Error occurred in usersController.logInUser. Check sever logs for more details'}
    })
  }
}

module.exports = usersController;
