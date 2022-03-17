var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sarthakGuptaSalarySchema = new Schema({
    employeeNumber: String,
    jobRole: String,
    monthlySalary: Number,
    yearlyBonus: Number,
}, {
    timestamps: true
});


const SarthakGuptaSalarySchema = mongoose.model('SarthakGuptaSalarySchema', sarthakGuptaSalarySchema);
module.exports = SarthakGuptaSalarySchema;
