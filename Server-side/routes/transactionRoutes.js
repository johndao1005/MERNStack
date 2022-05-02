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
  .route('/:id')
  .post( checkToken)
  .get( confirmTransaction);

module.exports = router