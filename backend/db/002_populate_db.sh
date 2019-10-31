#!/bin/bash
# Make sure this file has UNIX line endings. Ran into problems when docker run refused to interpret anything lines in the script as a command. Run "dos2unix filename" to fix

set -e

PGPASSWORD=lBg2nt0KFh13N6hx psql -v ON_ERROR_STOP=1 --username tmc --dbname tmc  <<-EOSQL

	CREATE TABLE users (
		user_email VARCHAR(255) NOT NULL,
		CONSTRAINT users_PK PRIMARY KEY (user_email)
	);

	-- create test data
	INSERT INTO users (user_email) VALUES ('alexladerman@gmail.com');

	CREATE TABLE orders (
		order_id SERIAL NOT NULL,
		user_email VARCHAR(255) NOT NULL,
		name VARCHAR(255),
		email VARCHAR(255),
		phone VARCHAR(255),
		fromaddress VARCHAR(255),
		toaddress VARCHAR(255),
		services VARCHAR(255),
		movingdate VARCHAR(255),
		message VARCHAR(255),
		CONSTRAINT orders_PK PRIMARY KEY (order_id)
	);

	INSERT INTO orders (user_email, name, email, phone, fromaddress, toaddress, services, movingdate, message) VALUES ('alexladermanægmail.com', 'Julia', 'julia@somefictionaldomain.com', '987654321', 'Some Street, 4321, Packed Town, Movingland', 'Some Avenue, 1234, Clean City, Movingland', 'packing', '201901031', 'Please be careful with my stuff!');

EOSQL

