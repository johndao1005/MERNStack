const express = require("express")
const router = express.Router();
const {
    registerUser,
    authUser,
    updateUserProfile,
    userDetail,
} = require("../controller/usersController")


router.post('/login', authUser);

router.post('/register', registerUser);

router
  .route('/profile/:id')
  .get( userDetail)
  .put( updateUserProfile);

module.exports = router