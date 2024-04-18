const Database = require("./Database.js");

class EmployeeDatabase extends Database {
  constructor(options) {
    super(options);
  }

  getDepartments() {
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM department", (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT * FROM role INNER JOIN department ON role.department_id = department.id",
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }

  getEmployees() {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id",
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }

  addDepartment(department) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO department(name) VALUES ($1);",[department.department_name],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve
            (`Department ${department.department_name} successfully added!`
        );
        }
      );
    });
  }

  addRole(role) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3);",[title, salary, department_id],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(`Role ${role.title} successfully added!`);
        }
      );
    });
  }

  addEmployee(employee) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);",
        [
          employee.first_name,
          employee.last_name,
          employee.role_id,
          employee.manager_id,
        ],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(
            `${employee.first_name} ${employee.last_name} successfully added!`
          );
        }
      );
    });
  }

  updateEmployeeRole(employee) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "UPDATE employee SET role_id =($1), WHERE id =($2);",
        [employee.role_id, employee.employee_id],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }
}

module.exports = EmployeeDatabase;
