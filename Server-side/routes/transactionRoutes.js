const express = require("express")
const router = express.Router();
const {
    getPackageList,
    confirmTransaction,
    checkToken,
    createToken
} = require("../controller/transactionController")

router.get('/', getPackageList);

router.post('/create', createToken);

router
  .post('/token/:id',checkToken)

router
  .post('/delivery', confirmTransaction);

module.exports = router