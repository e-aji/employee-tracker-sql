const inquirer = require("inquirer");
const {
  MainMenuQuestions,
  AddDepartmentQuestions,
  AddEmployeeQuestions,
  AddRoleQuestions,
  UpdateEmployeeRoleQuestions,
  UpdateEmployeeManagerQuestions,
  RemoveDepartmentQuestions,
  RemoveRoleQuestions,
  RemoveEmployeeQuestions,
} = require("./questions.js");

const EmployeeDatabase = require("./db/EmployeeDatabase.js");

const db = new EmployeeDatabase({
  user: "postgres",
  password: "password",
  host: "localhost",
  database: "employee_db",
});

db.connect();

const doMenuQuestions = () => {
  inquirer.prompt(MainMenuQuestions).then((response) => {
    switch (response.option) {
      case "view_departments":
        view_departments();
        break;
      case "view_roles":
        view_roles();
        break;
      case "view_employees":
        view_employees();
        break;
      case "view_managers":
        view_managers();
        break;
      case "add_department":
        add_department();
        break;
      case "add_role":
        add_role();
        break;
      case "add_employee":
        add_employee();
        break;
      case "update_role":
        update_role();
        break;
      case "update_manager":
        update_manager();
        break;
      case "remove_department":
        remove_department();
        break;
      case "remove_role":
        remove_role();
        break;
      case "remove_employee":
        remove_employee();
        break;
      default: 
        quit();
    }
  });
};

const view_departments = () => {
  db.getDepartments()

    .then((results) => {
      const departmentData = results.rows;

      console.table(departmentData);
      doMenuQuestions();
    })
    .catch((err) =>
      console.log("Error getting current departments table", err)
    );
};

const view_roles = () => {
  db.getRoles()

    .then((results) => {
      console.table(results.rows);
      doMenuQuestions();
    })
    .catch((err) => console.log("Error getting current roles table", err));
};

const view_employees = () => {
  db.getEmployees()

    .then((results) => {
      console.table(results.rows);

      doMenuQuestions();
    })
    .catch((err) => console.log("Error getting current employees table", err));
};

const add_department = () => {
  inquirer.prompt(AddDepartmentQuestions).then((response) => {

    db.addDepartment(response)
      .then((results) => {
        console.log("\n", results, "\n");
        view_departments();
      })
      .catch((err) => console.log("Error adding new department", err));
  });
};

const add_role = () => {
  db.getDepartments().then((results) => {

    const departmentQuestion = AddRoleQuestions[2];
    results.rows.forEach((department) => {
      AddRoleQuestions[2].choices.push({
        value: department.id,
        name: department.name,
      });
    });
    inquirer.prompt(AddRoleQuestions).then((response) => {
      db.addRole(response)
        .then((results) => {
          console.log("\n", results, "\n");
          doMenuQuestions();
        })
        .catch((err) => console.log("Error adding new role", err));
    });
  });

};

const add_employee = () => {
  db.getRoles().then((roleResults) => {
    const roleQuestion = AddEmployeeQuestions[2];
    roleResults.rows.forEach((role) => {
      const role_summary = `${role.title} (${role.department}: ${role.salary})`;
      roleQuestion.choices.push({
        value: role.id,
        name: role_summary,
      });
    });

    db.getEmployees().then((employeeResults) => {
      const managerQuestion = AddEmployeeQuestions[3];
      employeeResults.rows.forEach((employee) => {
        managerQuestion.choices.push({
          value: employee.id,
          name: employee.first_name + ' ' + employee.last_name,
        });
      });

      managerQuestion.choices.push({
        value: null,
        name: "None",
      });

      inquirer.prompt(AddEmployeeQuestions).then((response) => {
        db.addEmployee(response)
          .then((results) => {
            console.log("\n", results, "\n");
            doMenuQuestions();
          })          
          .catch((err) => console.log("Error adding new employee", err));
      });
    });
  });

};

const update_role = () => {
  db.getEmployees().then((employeeResults) => {
    employeeResults.rows.forEach((employee) => {
      UpdateEmployeeRoleQuestions[0].choices.push({
        value: employee.id,
        name: employee.first_name + ' ' + employee.last_name,
      });
    });

    db.getRoles().then((roleResults) => {
      roleResults.rows.forEach((role) => {
        UpdateEmployeeRoleQuestions[1].choices.push({
          value: role.id,
          name: role.title,
        });
      });

      inquirer.prompt(UpdateEmployeeRoleQuestions).then((response) => {
        db.updateEmployeeRole(response)
          .then((results) => {
            console.log('Employee Updated Successfully');
            doMenuQuestions();
          })
          .catch((err) => console.log("Error updating role", err));
      });
    });
  });

};

const update_manager = () => {
  db.getEmployees().then((employeeResults) => {
    employeeResults.rows.forEach((employee) => {
      UpdateEmployeeManagerQuestions[0].choices.push({
        value: employee.id,
        name: employee.first_name + ' ' + employee.last_name,
      });
    });

    db.getEmployees().then((managerResults) => {
      managerResults.rows.forEach((manager) => {
        UpdateEmployeeManagerQuestions[1].choices.push({
          value: manager.id,
          name: manager.first_name + ' ' + manager.last_name,
        });
      });

      inquirer.prompt(UpdateEmployeeManagerQuestions).then((response) => {
        db.updateEmployeeManager(response)
          .then((results) => {
            console.log('Manager Updated Successfully');
            doMenuQuestions();
          })
          .catch((err) => console.log("Error updating employee manager", err));
      });
    });
  });
};

const remove_department = () => {
  db.getDepartments().then((results) => {

    results.rows.forEach((department) => {
      RemoveDepartmentQuestions[0].choices.push({
        value: department.id,
        name: department.name,
      });
    });
    inquirer.prompt(RemoveDepartmentQuestions).then((response) => {
      const departmentId = response.department_id;
      db.removeDepartment(departmentId)
        .then((results) => {
          console.log("Department Successfully Removed");
          doMenuQuestions();
        })
        .catch((err) => console.log("Error removing department", err));
    });
  });

};

const remove_role = () => {
  db.getRoles().then((results) => {

    results.rows.forEach((role) => {
      RemoveRoleQuestions[0].choices.push({
        value: role.id,
        name: role.title,
      });
    });
    inquirer.prompt(RemoveRoleQuestions).then((response) => {
      const roleId = response.role_id;
      db.removeRole(roleId)
        .then((results) => {
          console.log("Role Successfully Removed");
          doMenuQuestions();
        })
        .catch((err) => console.log("Error removing role", err));
    });
  });

};

const remove_employee = () => {
  db.getEmployees().then((results) => {

    results.rows.forEach((employee) => {
      RemoveEmployeeQuestions[0].choices.push({
        value: employee.id,
        name: employee.first_name + ' ' + employee.last_name,
      });
    });
    inquirer.prompt(RemoveEmployeeQuestions).then((response) => {
      const employeeId = response.employee_id;
      db.removeEmployee(employeeId)
        .then((results) => {
          console.log("Employee Successfully Removed");
          doMenuQuestions();
        })
        .catch((err) => console.log("Error removing employee", err));
    });
  });

};

const quit = () => {
  console.log("Thanks For Viewing the Employee Database Tracker!");
  process.exit();
};

doMenuQuestions();
