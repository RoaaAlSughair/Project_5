CREATE TABLE ratings (
ratings_id INT AUTO_INCREMENT NOT NULL,
ratings INT,
book_id INT,
user_id INT,
FOREIGN KEY (book_id) REFERENCES book(book_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
PRIMARY KEY (ratings_id)
);