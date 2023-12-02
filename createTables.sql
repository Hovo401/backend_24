CREATE TYPE project_types AS ENUM ('сайты', 'лэндинги', 'интернет-магазины', 'Веб-приложения', 'мобильные-приложения', 'crm-системы');

CREATE TABLE projects (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    short_description VARCHAR(3000),
    deadline_min_day DECIMAL(4, 0) CHECK (deadline_min_day > 0),
	deadline_max_day DECIMAL(4, 0) CHECK (deadline_max_day > 0),
    types project_types[],
    url VARCHAR(300),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




CREATE TABLE reviews (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img VARCHAR(300),
    review VARCHAR(5000),
    url VARCHAR(255),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services_prices (
    ID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    short_description VARCHAR(3000),
    deadlines DECIMAL(4, 0) CHECK (deadlines >= 0),
    hit BOOLEAN,
    price DECIMAL(12, 2) CHECK (price >= 0), 
    currency VARCHAR(3),
    price_individually BOOLEAN DEFAULT FALSE,
    time_individually BOOLEAN DEFAULT FALSE,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE downloads (
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




CREATE TYPE communication_methods AS ENUM ('Telegram', 'WhatsApp');

CREATE TABLE applications (
    ID SERIAL PRIMARY KEY,
    communication_method communication_methods[],
    client_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
	processed BOOLEAN DEFAULT FALSE,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    ID SERIAL PRIMARY KEY,
    communication_method communication_methods[],
    client_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message VARCHAR(3000),
	processed BOOLEAN DEFAULT FALSE,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
