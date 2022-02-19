const { Client } = require('pg')
const connectionData = {
user: 'postgres',
host: 'localhost',
database: 'myDatabase',
password: '1234',
port: 5432,
}
const adoptionClient = new Client(connectionData);