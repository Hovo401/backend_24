CREATE TABLE project_types (
    ID SERIAL PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE projects (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    short_description VARCHAR(3000),
    deadlines DATE[],
    types VARCHAR(255) ARRAY,
    url VARCHAR(300),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (types IS NOT NULL AND array_length(types, 1) > 0),
    FOREIGN KEY (types) REFERENCES project_types(type_name) ON DELETE CASCADE
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
    title VARCHAR(255),
    short_description VARCHAR(3000),
    deadlines DECIMAL(4, 0) CHECK (deadlines >= 0),
    hit BOOLEAN,
    price DECIMAL(12, 2), 
    currency VARCHAR(3),
    price_individually BOOLEAN,
    time_individually BOOLEAN,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE downloads (
    ID SERIAL PRIMARY KEY,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





CREATE TABLE communication_methods (
    ID SERIAL PRIMARY KEY,
    method_name VARCHAR(255) NOT NULL
);

CREATE TABLE applications (
    ID SERIAL PRIMARY KEY,
    communication_method VARCHAR(255) ARRAY,
    client_name VARCHAR(255),
    phone VARCHAR(30),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (communication_method IS NOT NULL AND array_length(communication_method, 1) > 0),
    FOREIGN KEY (communication_method) REFERENCES communication_methods(method_name) ON DELETE CASCADE
);

CREATE TABLE messages (
    ID SERIAL PRIMARY KEY,
    communication_method VARCHAR(255) ARRAY,
    client_name VARCHAR(255),
    phone VARCHAR(30),
    message VARCHAR(3000),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (communication_method IS NOT NULL AND array_length(communication_method, 1) > 0),
    FOREIGN KEY (communication_method) REFERENCES communication_methods(method_name) ON DELETE CASCADE
);
