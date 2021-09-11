create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password text NOT NULL,
    salt text,
    phone VARCHAR(20) NOT NULL,
    token text,
    role VARCHAR(50) NOT NULL
);
create TABLE orders(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) DEFAULT 'NULL',
    description text DEFAULT 'NULL',
    username VARCHAR(50) NOT NULL,
    patronymic VARCHAR(50),
    userlastname VARCHAR(50),
    email VARCHAR(255),
    phone VARCHAR(20) NOT NULL
);

    -- FOREIGN KEY (user_id) REFERENCES person (id)
    -- user_id INTEGER,