const MainMenuQuestions = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: [
           {value: 'view_departments', name: 'View All Departments'},
           {value: 'view_roles', name: 'View All Roles'},
           {value: 'view_employees', name: 'View All Employees'},
           {value: 'add_department', name: 'Add A Department'},
           {value: 'add_role', name: 'Add A Role'},
           {value: 'add_employee', name: 'Add An Employee'},
           {value: 'update_employee_role', name: 'Update An Employee Role'},
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
        name: 'role_title',
        message: 'What is the title of the new role?'
    },
    {

        type: 'input', name: 'salary', message: 'What is the salary of the new role? (numeric only)...',
        validate: function (value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        }
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What is the department of the new role?',
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
        message: 'What is the employee\'s role?',
        choices: [
            
        ],
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Who is the employee\'s manager?',
        choices: [
            
        ],
    }
]

const UpdateEmployeeRoleQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Which employee do you want to update?',
        choices: [
            
        ],
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is the employee\'s new role?',
        choices: [
            
        ],
    }
]

module.exports = {
    MainMenuQuestions,
    AddDepartmentQuestions,
    AddRoleQuestions,
    AddEmployeeQuestions,
    UpdateEmployeeRoleQuestions
}