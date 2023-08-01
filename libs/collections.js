const mongoClient = require('./mongoConfig');

const db = mongoClient.db('emojify');
const userCollection = db.collection('users');
const adminCollection = db.collection('admin');

module.exports = { userCollection, adminCollection };
