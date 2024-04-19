// // app.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const userRouter = require("./router/userRouter");
// const companyRouter=require("./router/companyRouter")

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use("/api/user", userRouter);
// app.use("/api/company",companyRouter);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const companyRouter = require("./router/companyRouter");
const employeeRouter=require("./router/EmployeeRouter")
const i18n=require('./config/language/i18.config');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/employee",employeeRouter)


app.use(i18n.init);

console.log("lanagauge %%%%%%",t('article.save.success'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




