// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    // added GitHub username to constructor
  constructor(id, officeNumber) {
    super("manager", id, "manager@manager.com");
    this.officeNumber = officeNumber;
  }


  getRole() {
    // Overridden to return 'Manager'
  }
}

const Manager = new Manager(2, 1);

Manager.getRole();
