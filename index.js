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
        console.log("Data - Rows: ", results.rows);

        const departmentData = results.rows;

        console.table(departmentData);
        doMenuQuestions();
    })
    .catch(err => console.log(err));
}


const view_roles = () => {

    db.getRoles()

    .then((results) => {

        const roleData = results.rows;
        console.table(roleData);
        doMenuQuestions();
    })
    .catch(err => console.log(err));

}


const view_employees = () => {

    db.getEmployees()

    .then((results) => {

        const employeeData = results.rows;
        console.table(employeeData);
        doMenuQuestions();
    })
    .catch(err => console.log(err));
}


const add_department = () => {

    inquirer
    .prompt(AddDepartmentQuestions)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('/n', results, '/n');
            doMenuQuestions();
        })
        .catch(err => console.log(err));
    })
}

const add_role = () => {

   db.getDepartments().then((results) => {

    const departmentQuestion = AddRoleQuestions[2];
    results.forEach ((department) => {
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
                doMenuQuestions();
            })
            .catch(err => console.log(err));
        });
   });
}


const add_employee = () => {

    db.getRoles().then((results) => {

        const roleQuestion = AddEmployeeQuestions[2];
        results.forEach ((role) => {
            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQuestion.choices.push({
                value: role.id, 
                name: role_summary
            });
        });

        db.getEmployees().then((results) => {

            const managerQuestion = AddEmployeeQuestions[3];
            results.forEach ((employee) => {
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
                        doMenuQuestions();
                    })
                    .catch(err => console.log(err));
                });
        });
    });
}


const update_role = () => {

    db.getEmployees().then((results) => {

        const employeeQuestion = UpdateEmployeeRoleQuestions[0];
        results.forEach((employee) => {
            employeeQuestion.choices.push({
                value: employee.id, 
                name: employee.name
            });
        });

        db.getRoles()

        .then((results) => {
            const roleQuestion = UpdateEmployeeRoleQuestions[1];
            results.forEach ((role) => {
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
                        doMenuQuestions();
                    })
                    .catch(err => console.log(err));
                });
        });
    });
}


doMenuQuestions();