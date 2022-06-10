const express = require("express")
const router = express.Router();
const {
    getPackageList,
    confirmTransaction,
    checkToken,
    createToken,
    createPackage
} = require("../controller/transactionController")

router.get('/', getPackageList);

router.post('/create', createToken);

router
  .post('/token/:id',checkToken)

router
  .post('/delivery', confirmTransaction);

router.post('/package', createPackage)

module.exports = router