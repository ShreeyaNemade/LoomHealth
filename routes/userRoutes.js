const express = require('express');

const { getAllUsers, registerController, loginController } = require('../controllers/userController');

//routes objects
const router = express.Router();

//get all users || get
router.get('/all-users', getAllUsers);

//create users || post
router.post('/register', registerController);

//login users || post
router.post('/login', loginController);

module.exports = router;