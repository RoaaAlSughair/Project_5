CREATE TABLE favorite (
favorite_id INT AUTO_INCREMENT NOT NULL,
book_id INT,
FOREIGN KEY (book_id) REFERENCES book(book_id),
PRIMARY KEY (favorite_id)
);