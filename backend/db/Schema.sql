Drop DATABASE books_worms;

CREATE DATABASE books_worms;

USE books_worms;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    firstName NVARCHAR(255),
    lastName NVARCHAR(255),
    email NVARCHAR(255),
    password NVARCHAR(255),
    role_id INT,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    PRIMARY KEY (user_id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT NOT NULL,
    category NVARCHAR (255) NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE book (
    book_id INT AUTO_INCREMENT NOT NULL,
    book_img BLOB,
    title NVARCHAR (50),
    description NVARCHAR (255),
    author NVARCHAR (255),
    publisher NVARCHAR (100),
    edition INT(5),
    pages INT(5),
    price FLOAT,
    category_id INT,
    is_avalible TINYINT DEFAULT 1,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    PRIMARY KEY (book_id)
);

CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT NOT NULL,
    comment NVARCHAR (255),
    book_id INT,
    commenter_id INT,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (commenter_id) REFERENCES users (user_id),
    FOREIGN KEY (book_id) REFERENCES book (book_id),
    PRIMARY KEY (comment_id)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT NOT NULL,
    quantity INT,
    book_id INT,
    user_id INT,
    totalPrice FLOAT,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (book_id) REFERENCES book (book_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    PRIMARY KEY (id)
);

CREATE TABLE ratings (
    ratings_id INT AUTO_INCREMENT NOT NULL,
    ratings INT,
    book_id INT,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES book (book_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    PRIMARY KEY (ratings_id)
);

CREATE TABLE contact (
    contact_id INT AUTO_INCREMENT NOT NULL,
    fullName NVARCHAR (100),
    email NVARCHAR (100),
    message NVARCHAR (255),
    PRIMARY KEY (contact_id)
);

CREATE TABLE favorite (
    favorite_id INT AUTO_INCREMENT NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id) REFERENCES book (book_id),
    PRIMARY KEY (favorite_id)
);