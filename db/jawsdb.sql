CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Cheese');
INSERT INTO burgers (burger_name) VALUES ('Bacon Cheese');
INSERT INTO burgers (burger_name, devoured) VALUES ('Butter', true);
INSERT INTO burgers (burger_name) VALUES ('California');
INSERT INTO burgers (burger_name) VALUES ('Steak');

SELECT * FROM burgers;