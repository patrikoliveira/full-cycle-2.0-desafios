CREATE DATABASE IF NOT EXISTS node_app_db;

use node_app_db;

CREATE TABLE IF NOT EXISTS people (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);