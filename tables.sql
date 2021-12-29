CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    device_type_id VARCHAR(50) PRIMARY KEY,
    device_name VARCHAR (50) UNIQUE NOT NULL,
	is_online BOOLEAN NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE devices_type (
    id SERIAL PRIMARY KEY,
    device_name VARCHAR(50) NOT NULL,
    device_description VARCHAR(200) NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE vehicle (
    id SERIAL PRIMARY KEY,
    vehicle_plate VARCHAR (20) UNIQUE NOT NULL,
	current_status INTEGER NOT NULL,
	is_active BOOLEAN NOT NULL
);

CREATE TABLE log_temperature (
    id SERIAL PRIMARY KEY,
    vehicle_id INTEGER NOT NULL,
    device_id INTEGER NOT NULL,
    read_data VARCHAR (50) NOT NULL,
	created_at TIMESTAMP
);

CREATE TABLE log_location (
    id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL,
    device_id INT NOT NULL,
    latitude VARCHAR (50) NOT NULL,
    longitude VARCHAR (50) NOT NULL,
	created_at TIMESTAMP
);

