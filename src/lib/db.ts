import mysql from 'mysql2/promise';

    const dbConfig = {
      host:  'mysql-db',
      user:  'root',
      password:  'password',
      database:  'aws_certs_db',
    };

    let connection: mysql.Connection | null = null;

    export async function getDbConnection() {
      if (connection) {
        return connection;
      }
      try {
        connection = await mysql.createConnection(dbConfig);
        console.log("MySQL connection established.");
        return connection;
      } catch (error) {
        console.error("Failed to connect to MySQL:", error);
        throw new Error("Database connection failed.");
      }
    }