# Employee Tracker (SQL)

## Description 

The aim of this project is to create a command line application that can be used to manage and update an employee database. This application was developed using Node.js, Inquirer and PostgreSQL 

## Table of Contents 

* [Criteria](#criteria)
* [Usage](#usage)
* [Built With](#built-with)
* [Images](#images)
* [Links](#links)

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Usage 

* Login to postgres by running 'psql -U postgres' in the terminal and then insert your postgres password. To read in the commands from the 'schema' and 'seeds' files you will run '\i db/schema.sql' and '\i db/seeds.sql' in postgres to create populate the database. 
* Once database has been populated, exit postgres using '\q' and then run 'npm start' or 'node index.js' in the terminal. 
* Input the answers to the questions presented.
* Once you have answered the questions you should have been able to view all roles, employees and departments and also add or remove each of these. You should also have been able to update an employee's role and manager.

## Built With 

* Node.js
* Inquirer (npm utility)
* Postgres 

## Images 

**The following image shows the application running in the command line**





## Links

Link to Walkthrough Video - 