DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department(
  Id INT AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role(
  Id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT,
  PRIMARY KEY (role_id)
  
);

Alter table employee_role
Add Foreign Key (id) references department(id);

CREATE TABLE employee(
  Id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (role_id) REFERENCES employee_id (role_id),
  FOREIGN KEY (manager_id) REFERENCES employee (employee_id)
);

ALTER TABLE employee
ADD FOREIGN KEY (manager_id) employee(Id);