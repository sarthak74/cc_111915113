var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sarthakGuptaDetailSchema = new Schema({
    employeeNumber: String,
    firstName: String,
    lastName: String,
    dob: Date,
    contact: String,
    password: String,
}, {
    timestamps: true
});


const SarthakGuptaDetailSchema = mongoose.model('SarthakGuptaDetailSchema', sarthakGuptaDetailSchema);
module.exports = SarthakGuptaDetailSchema;
