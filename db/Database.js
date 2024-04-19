const { Pool } = require("pg");
class Database {
  constructor(options) {
    this.options = options;
    this.db = null;
  }

  validate() {
    const { host, database, user, password } = this.options;
    if (!host || !database || !user || !password)
      throw new Error("All options must be provided");

    return;
  }

  connect() {
    this.validate();

    const { host, database, user, password } = this.options;

    const pool = new Pool (
      
      // Please enter your details below
      {
        user: 'postgres',
        password: 'five', 
        host: 'localhost',
        database: 'employee_db'
      },

      console.log('Connected to the employee database!')
  );

    pool.connect();
    this.db = pool;
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Database;
