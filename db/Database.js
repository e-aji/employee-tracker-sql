const pg = require('pg');
class Database {
    constructor(options) {
        this.options = options
        this.db = null
    }

    validate () {
        const {host, database, user, password} = this.options;
        if (!host || !database || !user || !password) 
            throw new Error('All options must be provided');
        
        return;
    }

    connect() {

        this.validate();
    
        const { host, database, user, password } = this.options;
    
        this.db = new pg.Client(    
        {
            user: 'postgres',
            password: 'five',
            host: 'localhost',
            database: 'employee_db'
        });
    
        // Connect to the database
        this.db.connect(err => {
            if (err) {
                console.error('Error connecting to database:', err);
            } else {
                console.log('Connected to Employee database.');
            }
        });
    }

    disconnect () {
        this.db.disconnect();
    }
}

module.exports = Database;