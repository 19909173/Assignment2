module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/contacts/:contactId/company/", company.create);
  
    router.get("/contacts/:contactId/company/", company.findAll);
  
    router.get("/contacts/:contactId/company/:companyId", company.findOne);
  
    router.put("/contacts/:contactId/company/:companyId", company.update);
  
    router.delete("/contacts/:contactId/company/:companyId", company.delete);
  
    app.use('/api', router);
};