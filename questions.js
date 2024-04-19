const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
           {value: 'view_departments', name: 'View All Departments'},
           {value: 'view_roles', name: 'View All Roles'},
           {value: 'view_employees', name: 'View All Employees'},
           {value: 'view_managers', name: 'View All Managers'},
           {value: 'add_department', name: 'Add A Department'},
           {value: 'add_role', name: 'Add A Role'},
           {value: 'add_employee', name: 'Add An Employee'},
           {value: 'update_role', name: 'Update An Employee Role'},
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

module.exports = {
    MainMenuQuestions,
    AddDepartmentQuestions,
    AddRoleQuestions,
    AddEmployeeQuestions,
    UpdateEmployeeRoleQuestions
}