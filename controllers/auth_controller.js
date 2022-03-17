const SarthakGuptaDetailSchema = require('../models/SarthakGupta_111915113_details');
const SarthakGuptaSalarySchema = require('../models/SarthakGupta_111915113_salary');


const errp = "authcontroller";

var authController = {
    login: {
        post: async(req, res) => {
            try {
                console.log("login post");
                const {employeeNumber, password} = req.body;
                const user = await SarthakGuptaDetailSchema.findOne({employeeNumber: employeeNumber});
                if(!user){
                    throw {status: 401, err: "No Employee Number exists"};
                }
                var pwdmatch = false;
                if(password === user.password){
                    pwdmatch = true;
                }
                if(!pwdmatch){
                    throw {status: 403, err: "Wrong Password!"};
                }
                
                return res.status(200).send({success: true, msg: 'Login success', user: user});
            } catch (err) {
                console.log(errp, "login err:", err.err || err);
                return res.status(err.status || 500).json({ success: false, err: err.err || "Server error", msg: 'Trouble in authenticating you!' });
            }
        }
    },

    register: {
        post: async(req, res) => {
            try {
                
                var nuser = req.body;
                var {employeeNumber, password} = req.body;
                var user = await SarthakGuptaDetailSchema.findOne({employeeNumber: employeeNumber});
                if(user){
                    throw {status: 409, err: 'Employee Number already taken'};
                }
                console.log(nuser);
                var dob = new Date(nuser['dob']);
                console.log(dob);
                
                var newuserDetail = new SarthakGuptaDetailSchema(nuser);
                await newuserDetail.save();
                newuserSalary = new SarthakGuptaSalarySchema(nuser);
                await newuserSalary.save();
                
                return res.status(200).send({success: true, msg: 'Successfully registered'});
                
                
            } catch (err) {
                console.log(errp, "register err:", err.det || err);
                return res.status(err.status || 500).json({ success: false, err: err.err || "Server error", msg: 'Trouble in registering you!' });
            }
        }
    },

    report: async(req, res) => {
        try {
                console.log("report--", req.body);
            var nuser = req.body;
            var {employeeNumber} = req.body;
            var user = await SarthakGuptaDetailSchema.findOne({employeeNumber: employeeNumber});
            var salary = await SarthakGuptaSalarySchema.findOne({employeeNumber: employeeNumber});
            
            return res.status(200).send({success: true, msg: 'Data fetched', user: user, salary: salary});
            
            
        } catch (err) {
            console.log(errp, "report err:", err.det || err);
            return res.status(err.status || 500).json({ success: false, err: err.err || "Server error", msg: 'Trouble in fetching data!' });
        }
    },

    add: async(req, res) => {
        try {
            console.log("add");
            var nuser = req.body;
            var {employeeNumber, password} = req.body;
            var user = await SarthakGuptaDetailSchema.findOne({employeeNumber: employeeNumber});
            if(user){
                throw {status: 409, err: 'Employee Number already taken'};
            }
            console.log(nuser);
            var dob = new Date(nuser['dob']);
            console.log(dob);
            
            var newuserDetail = new SarthakGuptaDetailSchema(nuser);
            await newuserDetail.save();
            newuserSalary = new SarthakGuptaSalarySchema(nuser);
            await newuserSalary.save();
            
            return res.status(200).send({success: true, msg: 'Successfully added'});
            
            
        } catch (err) {
            console.log(errp, "adding err:", err.det || err);
            return res.status(err.status || 500).json({ success: false, err: err.err || "Server error", msg: 'Trouble in adding you!' });
        }
    }

}

module.exports = authController;