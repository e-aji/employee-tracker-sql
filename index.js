const inquirer = require ('inquirer');
const {MainMenuQuestions, AddDepartmentQuestions, AddEmployeeQuestions, AddRoleQuestions, UpdateEmployeeRoleQuestions} = require('./questions.js');

const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    user: 'postgres',
    password: 'five',
    host: 'localhost',
    database: 'employee_db'
});

db.connect();

const doMenuQuestions = () => {

    inquirer
        .prompt(MainMenuQuestions)
        .then((response) => {

            switch (response.option) {
                case 'view_departments':
                    view_departments();
                    break;
                case 'view_roles':
                    view_roles();
                    break;
                case 'view_employees':
                    view_employees();
                    break;
                case 'add_department':
                    add_department();
                    break;
                case 'add_role':
                    add_role();
                    break;
                case 'add_employee':
                    add_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
            }   
    })

};

const view_departments = () => {

    db.getDepartments()

    .then((results) => {
        //console.log("Data: ", results);
        // console.log("Data - Rows: ", results.rows);

        const departmentData = results.rows;

        console.table(departmentData);
    })
    .catch(err => console.log('Error getting current departments table', err));

    doMenuQuestions();

}


const view_roles = () => {

    db.getRoles()

    .then((results) => {

        const roleData = results.rows;

        console.table(roleData);

    })
    .catch(err => console.log('Error getting current roles table' , err));

    doMenuQuestions();

}


const view_employees = () => {

    db.getEmployees()

    .then((results) => {
        
        console.log(results);

        const employeeData = results.rows;
        console.table(employeeData);
       
        doMenuQuestions();

    })
    .catch(err => console.log('Error getting current employees table' , err));

}


const add_department = () => {

    inquirer
    .prompt(AddDepartmentQuestions)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('/n', results, '/n');
        })
        .catch(err => console.log('Error adding new department', err));

    })

    doMenuQuestions();
}

const add_role = () => {

   db.getDepartments().then((results) => {

    const departmentQuestion = AddRoleQuestions[2];
    results.rows.forEach ((department) => {
        departmentQuestion.choices.push({
            value: department.id, 
            name: department.name
            });
        });

    inquirer
        .prompt(AddRoleQuestions)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('/n', results, '/n');
            })
            .catch(err => console.log('Error adding new role', err));
        });
   });

        doMenuQuestions();

}


const add_employee = () => {

    db.getRoles().then((roleResults) => {

        const roleQuestion = AddEmployeeQuestions[2];
        roleResults.rows.forEach ((role) => {
            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQuestion.choices.push({
                value: role.id, 
                name: role_summary
            });
        });

        db.getEmployees().then((employeeResults) => {

            const managerQuestion = AddEmployeeQuestions[3];
            employeeResults.rows.forEach ((employee) => {
                managerQuestion.choices.push({
                    value: employee.id, 
                    name: employee.name
                });
            });

            managerQuestion.choices.push({
                value: null, 
                name: 'None'
            });

            inquirer
                .prompt(AddEmployeeQuestions)
                .then(response => {
                    db.addEmployee(response).then((results) => {
                        console.log('/n', results, '/n');
                    })
                    .catch(err => console.log('Error adding new employee', err));
                });
        });
    });

    doMenuQuestions();
}


const update_role = () => {

    db.getEmployees().then((employeeResults) => {

        const employeeQuestion = UpdateEmployeeRoleQuestions[0];
        employeeResults.rows.forEach((employee) => {
            employeeQuestion.choices.push({
                value: employee.id, 
                name: employee.name
            });
        });

        db.getRoles()

        .then((roleResults) => {
            const roleQuestion = UpdateEmployeeRoleQuestions[1];
            roleResults.rows.forEach ((role) => {
                roleQuestion.choices.push({
                    value: role.id, 
                    name: role.title
                });
            });

            inquirer
                .prompt(UpdateEmployeeRoleQuestions)
                .then((response) => {
                    db.updateEmployeeRole(response).then((results) => {
                        console.log('/n', results, '/n');
                    })
                    .catch(err => console.log('Error updating role' , err));
                });
        });
    });

    doMenuQuestions();
}


doMenuQuestions();