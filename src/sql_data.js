require('dotenv').config()
const sql = require('sqlite3').verbose();
const db = new sql.Database(process.env.DB_PATH);


db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)`);


module.exports = {
    async createUser(user) {
        const newUser = await new Promise((resolve, reject) => {
            db.run('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        return newUser;
    },

    async deleteUser(id) {
        const rogue = await new Promise((resolve, reject) => {
            db.get('DELETE FROM users WHERE id = ?', [id], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        return rogue;
    },

    async getUser(id) {
        const user = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        return user;
    },

    async getUsers() {
        const users = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM users', [], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        return users;
    },

    async updateUser(id, newData) {
        const updatedUser = await new Promise((resolve, reject) => {
            db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [newData.name, newData.age, id], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        return this.getUser(id);
    }
}