INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 150000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Account Manager', 160000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 190000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 100000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Specialist', 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Aya', 'Gilbert', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tobias', 'Black', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Chan', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ashley', 'Rodriguez', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'Tupik', 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kunal', 'Singh', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Malia', 'Brown', 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Lourd', 8, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Rebekah', 'McPherson', 9, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Allen', 10, 8);

