import mysql from "mysql2"

export class Database {
    protected connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            database: "currency_converter"
        }).promise()
    }
}