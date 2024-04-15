const EmployeesModel = require("../models/employees.model");

module.exports.getEmployees = async (req, res) => {
  const employees = await EmployeesModel.find();
  res.status(200).json(employees);
};

module.exports.setEmployees = async (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.dateOfBirth ||
    !req.body.startDate ||
    !req.body.address ||
    !req.body.city ||
    !req.body.state ||
    !req.body.zipCode ||
    !req.body.department
  ) {
    res.status(400).json({ message: "Please fill all the fields" });
  }

  const employee = await EmployeesModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    startDate: req.body.startDate,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    department: req.body.department,
  });
  res.status(200).json(employee);
};
