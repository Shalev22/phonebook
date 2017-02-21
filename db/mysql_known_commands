create database phonebook;
use phonebook;

CREATE TABLE owners(
	owner_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,  
	password VARCHAR(100)
	);


CREATE TABLE contacts(
	contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,  
	owner_id INT NOT NULL,
	phone1 VARCHAR(100) NOT NULL,
	phone2 VARCHAR(100),
	phone3 VARCHAR(100),
	comment VARCHAR(100)
	) DEFAULT CHARSET=utf8 ;
-------------------------------------------------

INSERT INTO owners (name, password) VALUES
('Jasmine', 'Australia'),
('Jay', 'India'),
('Jim', 'Germany'),
('Lesley', 'Scotland');


INSERT INTO contacts (name, owner_id, phone1, phone2, phone3, comment) VALUES
('matan', 1, "054-7737314", "o48764576", NULL, "brother"),
('moran', 1, "054-7737315", "o48764576", NULL, "sys"),
('Jim', 2, "0547747426", NULL, NULL, NULL);

---------------------------------------------------

DELETE FROM contacts
where owner_id = 1

DELETE FROM owners
where owner_id = 1

------------------------

UPDATE contacts SET contacts.phone2="111111111"
WHERE contact_id=3;