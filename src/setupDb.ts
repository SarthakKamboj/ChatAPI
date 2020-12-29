import Knex from "knex"
require("dotenv").config();

export const knex = Knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});