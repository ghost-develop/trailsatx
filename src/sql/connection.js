const mysql = require('mysql');

class Connection {
    constructor() {
        if(!this.pool) {
            console.log('creating connection...');
            this.pool = mysql.createPool({
                host: '',
                user: '',
                password: '',
                database: ''
            })
            return this.pool
        }
        return this.pool
    }
}

const instance = new Connection();
module.exports = instance;