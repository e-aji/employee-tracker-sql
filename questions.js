const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
           {value: 'view_departments', name: 'View All Departments'},
           {value: 'view_roles', name: 'View All Roles'},
           {value: 'view_employees', name: 'View All Employees'},
           {value: 'add_department', name: 'Add A Department'},
           {value: 'add_role', name: 'Add A Role'},
           {value: 'add_employee', name: 'Add An Employee'},
           {value: 'update_role', name: 'Update An Employee Role'},
           {value: 'update_manager', name: 'Update An Employee Manager'},
           {value: 'remove_department', name: 'Remove A Department'},
           {value: 'remove_role', name: 'Remove A Role'},
           {value: 'remove_employee', name: 'Remove An Employee'},
           {value: 'exit', name: 'Exit'}
        ]
    }

]

const AddDepartmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the new department?'
    }
]

const AddRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the new role?'
    },
    {

        type: 'number', name: 'salary', message: 'What is the salary of the new role? (numeric only)...',
        validate: function (value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a valid number';
        }
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Select the department for this role....',
        choices: [
            
        ],
    }

]
const AddEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employee\'s first name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employee\'s last name?'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Select the role for this employee....',
        choices: [
            
        ],
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select the employee\'s manager....',
        choices: [
            
        ],
    }
]

const UpdateEmployeeRoleQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee you would like to update....',
        choices: [
            
        ],
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Select the new role for this employee....',
        choices: [
            
        ],
    }
]

const UpdateEmployeeManagerQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee you would like to update....',
        choices: [
            
        ],
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select the new manager for this employee....',
        choices: [
            
        ],
    }
]

const RemoveDepartmentQuestions = [
    {
        type: 'list',
        name: 'department_id',
        message: 'Select the department you would like to remove.... (The roles and employees associated with this department will also be removed)',
        choices: [
            
        ],
    }
]

const RemoveRoleQuestions = [
    {
        type: 'list',
        name: 'role_id',
        message: 'Select the role you would like to remove.... (The employees associated with this role will also be removed)',
        choices: [
            
        ],
    }
]

const RemoveEmployeeQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee you would like to remove....',
        choices: [
            
        ],
    }
]

module.exports = {
    MainMenuQuestions,
    AddDepartmentQuestions,
    AddRoleQuestions,
    AddEmployeeQuestions,
    UpdateEmployeeRoleQuestions,
    UpdateEmployeeManagerQuestions,
    RemoveDepartmentQuestions,
    RemoveRoleQuestions,
    RemoveEmployeeQuestions
}