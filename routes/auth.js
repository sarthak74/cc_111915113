const authController = require("../controllers/auth_controller");

const express = require('express');
const SarthakGuptaDetailSchema = require("../models/SarthakGupta_111915113_details");

const router = express.Router();

router.route('/login')
.post(authController.login.post);

router.route('/register')
.get(async(req, res) => {
    res.render('register', {logged: false});
})
.post(authController.register.post);

router.route('/add')
.get(async(req, res) => {
    res.render('add', {logged: true});
})
.post(authController.add);

router.route('/report/:emp')
.get(async(req, res) => {
    var user = await SarthakGuptaDetailSchema.findOne({'employeeNumber': req.params.emp});
    console.log("report - ", user);
    res.render('report', {
        user: user,
        logged: true
    });
})
.post(authController.report);




module.exports = router;
