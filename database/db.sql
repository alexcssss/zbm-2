CREATE DATABASE zbm;

use zbm;

CREATE TABLE admin (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE attendant (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(100) NOT NULL,
    main_phone VARCHAR(100) NOT NULL,
    second_phone VARCHAR(100),
    address VARCHAR(350) NOT NULL
);

CREATE TABLE student (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(100) NOT NULL,
    income_year INT(4) NOT NULL,
    current_grade VARCHAR(25) NOT NULL,
    attendant_id INT(10),
    CONSTRAINT fk_attendant FOREIGN KEY (attendant_id)  
    REFERENCES attendant(id)   
);

CREATE TABLE professor (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(100) NOT NULL,
    main_phone VARCHAR(100) NOT NULL,
    address VARCHAR(350) NOT NULL
);
