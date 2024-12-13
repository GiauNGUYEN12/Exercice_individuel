CREATE TABLE users
(id INTEGER PRIMARY KEY AUTOINCREMENT,
firstname TEXT NOT NULL,
lastname TEXT NOT NULL,
email UNIQUE);
INSERT INTO users (firstname, lastname, email) 
VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) 
VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) 
VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) 
VALUES ('Barbara', 'Chase', 'barbara@test.fr');

CREATE TABLE edusigns (
    id INTEGER PRIMARY KEY REFERENCES users(id),
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email ,
    created_at DATETIME
);

INSERT INTO edusigns (firstname, lastname, email, created_at) VALUES
    ('Ada', 'Lovelace', 'ada@adatechschool.com', '2024-12-11 10:59:48'),
    ('Grace', 'Dupont', 'grace@graceadatechschool.com', '2024-12-11 11:01:29'),
    ('Dorothy', 'Einstein', 'dorothy@adatechschool.com', '2024-12-11 11:01:41'),
    ('Ella', 'Newton', 'ella@adatechschool.com', '2024-12-11 11:01:41'),
    ('Grace', 'Dupont', 'grace@adatechschool.com', '2024-12-11 11:01:41')

SELECT * FROM users;

SELECT * FROM users 
WHERE firstname = 'Ada';

SELECT * FROM users 
WHERE firstname LIKE 'B%';

SELECT COUNT(*) FROM users;

SELECT COUNT(*) FROM users 
WHERE firstname LIKE 'B%';

SELECT firstname FROM users;

UPDATE edusigns 
SET created_at = '2024-05-30 09:30:00'
WHERE firstname = 'Ada';

UPDATE edusigns 
SET created_at = '2024-05-30 09:30:00'