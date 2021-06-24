module.exports = (app) => {
    const fetchs = require('../controllers/controllers');

    var router = require("express").Router();

    // Create 
    router.post("/", fetchs.create);

    app.use("/api", router);

};