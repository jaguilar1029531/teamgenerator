// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    // added GitHub username to constructor
  constructor(id, school) {
    super("intern", id, "intern@intern.com");
    this.school = school;
  }


  getSchool() {

  }

  getRole() {
    // Overridden to return 'Intern'
  }
}

const Intern = new Intern(3, "UT");

Intern.getRole();
Intern.getSchool();