const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    max: 50,
  },
  role: {
    type: String,
    required: true,
    max: 50, 
  },
  // CPF
  docNumber: {
    type: String,
    required: true,
    /* default: () => {
      
    } */
  },
  admissionDate: {
    type: Date,
    default: Date.UTC,
  },
  email: {
    type: String,
    required: true,
    lowecase: true,
    unique: true,
    /* validate: (value) => {
      
    } */
  },
  address: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  lastWeekMeditationHours: {
    type: Number,
    required: true,
  },
  healthInsuranceCompanies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'healthInsuranceCompanies',
    },
  ],
});

const Employees = mongoose.model('Employees', EmployeeSchema);

module.exports = Employees;
