CREATE TABLE contact (
contact_id INT AUTO_INCREMENT NOT NULL,
fullName nVARCHAR (100),
email nVARCHAR (100),
message nVARCHAR (255),
PRIMARY KEY (contact_id)
);