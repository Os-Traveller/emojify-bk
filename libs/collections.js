const mongoClient = require('./mongoConfig');

const db = mongoClient.db('emojify');
const userCollection = db.collection('users');

module.exports = { userCollection };
