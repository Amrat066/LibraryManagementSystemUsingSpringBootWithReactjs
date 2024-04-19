const express = require("express");
const { login,CreateEmployee,getEmployeeData,DeleteEmployeeData,UpdateEmployeeData, getEmployeeById} = require("../controller/EmployeeController");

const router = express.Router();

router.post("/LoginEmployee", login);
router.post("/InsertEmployee", CreateEmployee);
router.get("/GetEmployeeById/:id",getEmployeeById)
router.get("/GetEmployeeData",getEmployeeData);
router.delete("/DeleteEmployeeData/:id",DeleteEmployeeData);
router.put("/UpdateEmployeeData/:id",UpdateEmployeeData)


module.exports = router;
