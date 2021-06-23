

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE users(
    user_id INT AUTO_INCREMENT NOT NULL,
    firstName nVARCHAR(255),
    lastName nVARCHAR(255),
    email nVARCHAR(255),
    password nVARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (user_id)
);