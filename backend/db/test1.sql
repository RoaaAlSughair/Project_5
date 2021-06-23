CREATE TABLE book(
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
    comment_id INT,
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (book_id)
);

ALTER TABLE comments
ADD FOREIGN KEY (book_id) REFERENCES book(book_id);

CREATE TABLE cart(
    id INT AUTO_INCREMENT NOT NULL,
    quantity INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    total price float,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id) FOREIGN KEY (user_id) REFERENCES users(id),
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT NOT NULL,
    category nVARCHAR (255) NOT NULL,
    PRIMARY KEY (category_id)
);