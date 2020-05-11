// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    // added GitHub username to constructor
  constructor(id, github) {
    super("engineer", id, "engineer@engineer.com");
    this.github = github;
  }

  getGithub() {
    console.log(this.github);
  }

  getRole() {
    // Overridden to return 'Engineer'
  }
}

const Engineer = new Engineer(1, "jaguilar1029531");


Engineer.getGithub();
Engineer.getRole();
