INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');
INSERT INTO department (id, name) VALUES (5, 'Marketing');

INSERT INTO role (id, title, salary, department) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO role (id, title, salary, department) VALUES (2, 'Salesperson', 80000, 1);
INSERT INTO role (id, title, salary, department) VALUES (3, 'Lead Engineer', 150000, 2);
INSERT INTO role (id, title, salary, department) VALUES (4, 'Software Engineer', 120000, 2);
INSERT INTO role (id, title, salary, department) VALUES (5, 'Account Manager', 160000, 3);
INSERT INTO role (id, title, salary, department) VALUES (6, 'Accountant', 125000, 3);
INSERT INTO role (id, title, salary, department) VALUES (7, 'Legal Team Lead', 250000, 4);
INSERT INTO role (id, title, salary, department) VALUES (8, 'Lawyer', 190000, 4);
INSERT INTO role (id, title, salary, department) VALUES (9, 'Marketing Manager', 100000, 5);
INSERT INTO role (id, title, salary, department) VALUES (10, 'Marketing Specialist', 90000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Aya', 'Gilbert', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Tobias', 'Black', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Mike', 'Chan', 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Ashley', 'Rodriguez', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Kevin', 'Tupik', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Kunal', 'Singh', 6, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Malia', 'Brown', 7, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Sarah', 'Lourd', 8, 7);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Rebekah', 'McPherson', 9, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Tom', 'Allen', 10, 9);

