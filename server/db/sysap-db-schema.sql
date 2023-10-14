-- Create the exercises table
CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT
);

-- Sample data for exercises
INSERT INTO exercises (name) VALUES ('Push-ups');
INSERT INTO exercises (name) VALUES ('Sit-ups');
INSERT INTO exercises (name) VALUES ('Squats');

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- Sample data for users
INSERT INTO users (username, email) VALUES ('user1', 'user1@example.com');
INSERT INTO users (username, email) VALUES ('user2', 'user2@example.com');
INSERT INTO users (username, email) VALUES ('user3', 'user3@example.com');

