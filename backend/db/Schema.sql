CREATE DATABASE books_worms;
USE books_worms;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE users (
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

CREATE TABLE book (
    book_id INT AUTO_INCREMENT NOT NULL,
    img_book image,
    title NVARCHAR(50),
    description NVARCHAR(255),
    author NVARCHAR(255),
    publisher NVARCHAR(100),
    edition INT(5),
    pages INT(5),
    price float,
    author NVARCHAR(100),
    is_avalible TINYINT DEFAULT 1,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (book_id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT NOT NULL,
    comment nVARCHAR(255),
    book_id INT,
    commenter_id INT,
    FOREIGN KEY (commenter_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT NOT NULL,
    quantity INT,
    book_id INT,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    total price float,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT NOT NULL,
    category nVARCHAR (255) NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE ratings (
    ratings_id INT AUTO_INCREMENT NOT NULL,
    ratings INT,
    book_id INT,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (ratings_id)
);

CREATE TABLE contact (
    contact_id INT AUTO_INCREMENT NOT NULL,
    fullName nVARCHAR (100),
    email nVARCHAR (100),
    message nVARCHAR (255),
    PRIMARY KEY (contact_id)
);

CREATE TABLE favorite (
    favorite_id INT AUTO_INCREMENT NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    PRIMARY KEY (favorite_id)
);