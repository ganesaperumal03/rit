const Pool =require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rit',
    password: '123',
    port: 5432, // Change if your PostgreSQL port is different
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  module.exports=pool;