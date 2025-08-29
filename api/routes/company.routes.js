module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/company/", company.create);
  
    router.get("/company/", company.findAll);
  
    router.get("/company/:companyId", company.findOne);
  
    router.put("/company/:companyId", company.update);
  
    router.delete("/company/:companyId", company.delete);
  
    app.use('/api', router);
};