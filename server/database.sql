CREATE DATABASE cyf_knowledge_checklist;

CREATE TABLE users
(
    user_id uuid DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_slack VARCHAR(255) ,
    user_password VARCHAR(255) NOT NULl,
    user_github VARCHAR(255)

    PRIMARY KEY(user_id)
);