const { Pool } = require('pg')

let pool;
let config;

if (process.env.POSTGRESDB_URI) {
  const connectionString = process.env.POSTGRESDB_URI
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
  
} else {
  config = {
    host: 'localhost',
    database: 'cyf_hotel',
    password: '',
    port: 5432
  }
}
pool = new Pool(config)  

exports.Connection = pool