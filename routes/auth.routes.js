
const express = require('express');
const router = express.Router();
const authController =  require('../controllers/auth.controller');


//User SignUp or Login
// router.post('/oauth/login', );

//For directing to the home page
// router.get('/home',userControllers.home);

//For scanning QR
// router.post('/scan_qr',);

//For directing to the dashboard
// router.get('/dashboard',authController.dashboard);

//For Viewing profile
// router.get('/view_profile',authController.viewprofile);

// organizationregister
router.post('/organization-register', authController.organizationRegistration);


// new user register
router.post('/register-user', authController.registerUser);

// login
router.post('/login', authController.login);


//For logging out
router.post('/logout', authController.logout);


module.exports = router