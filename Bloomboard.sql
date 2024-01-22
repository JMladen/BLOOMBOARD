CREATE DATABASE Bloomboard;

USE Bloomboard;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password) VALUES ('john_doe', 'password123');

SELECT User FROM mysql.user WHERE User='your_database_user';
