// router/userRouter.js
const express = require("express");
const { CreateCompany,getCompanyData,DeleteCompanyData,UpdateCompanyData} = require("../controller/companyController");

const router = express.Router();

router.post("/InsertCompany", CreateCompany);
router.get("/GetCompanyData",getCompanyData);
router.delete("/DeleteCompanyData/:comId",DeleteCompanyData);
router.put("/UpdateCompanyData/:comId",UpdateCompanyData)

module.exports = router;
