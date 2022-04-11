const express = require("express")
const router = express.Router();
const {
    registerUser,
    authUser,
    updateUserProfile,
    userDetail,
} = require("../controller/usersController")


router.get('/login', authUser);

router.get('/register', registerUser);

router
  .route('/profile/:id')
  .get( userDetail)
  .put( updateUserProfile);

module.exports = router