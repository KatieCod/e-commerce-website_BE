const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'katya',
    database: 'shop'
});

async function getCartItems(userId) {
    try {
        const result = await new Promise((resolve, reject) => {
            const sqlQuery = `SELECT * FROM cart WHERE user_id = ?`;
            connection.query(
                sqlQuery, [userId], (err, results, fields) => {
                    if (err) {
                        console.error('Error fetching cart item:', err);
                        reject(err);
                        return;
                    }
                    resolve(results);
                });
        })
        return result;

    } catch (erorr) {
        throw erorr
    }
}

module.exports = getCartItems;