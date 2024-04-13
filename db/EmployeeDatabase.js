const Database = require('./Database.js');

class EmployeeDatabase extends Database {
    constructor(options) {
        super(options);
    }


    getDepartments() {
        return new Promise((resolve, reject) => {
            return this.db.query('SELECT * FROM department', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            return this.db.query('SELECT * FROM roles INNER JOIN department ON roles.department_id = department.id', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getEmployees() {
        return new Promise((resolve, reject) => {
            return this.db.query(
            `SELECT
                employee.id, 
                CONCAT(employee.first_name, " ", employee.last_name) AS name, 
                role.title as role_title, 
                department.name AS department_name, 
                role.salary AS role_salary, 
                CONCAT(manager.first_name, " ", manager.last_name) AS manager
            
            FROM employee 
                INNER JOIN roles ON employee.role_id = role.id
                INNER JOIN department ON roles.department_id = department.id
                LEFT JOIN employee as manager ON employee.manager_id = manager.id`    
            ,(err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    addDepartment(department) {
        return new Promise((resolve, reject) => {
            return this.db.query('INSERT INTO department SET ?', {name: department.department_name}, (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(`Department ${department.department_name} successfully added!`);
            });
        });
    }

    addRole (role) {

        const roleData = {
            title: role.title,
            salary: role.salary,
            department_id: role.department
        }
        return new Promise((resolve, reject) => {
            return this.db.query('INSERT INTO roles SET ?', {roleData}, (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(`Role ${role.title} successfully added!`);
            });
        });
    }

    addEmployee (employee) {
        const employeeData = {
            first_name: employee.first_name,
            last_name: employee.last_name,
            role_id: employee.role_id,
            manager_id: employee.manager_id
        }
        return new Promise((resolve, reject) => {
            return this.db.query('INSERT INTO employee SET ?', {employeeData}, (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(`${employee.first_name} ${employee.last_name} successfully added!`);
            });
        });
    }

    updateEmployeeRole (employee) {
     
        return new Promise((resolve, reject) => {
            return this.db.query('UPDATE employee SET role_id = ?, WHERE id = ?', [employee.role_id, employee.employee_id], (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(results);
            });
        });
    }

}

module.exports = EmployeeDatabase;