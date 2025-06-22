const express = require('express');
const { getAllUsers, loginController, registerController } = require('../controllers/userController'); 

const router = express.Router();

//GET ALL USERS || GET
router.get('/all-users', getAllUsers);

//CREATE USER ||POST
router.post('/register', registerController); 

//LOGIN || POST
router.post('/login', loginController);

module.exports = router;
