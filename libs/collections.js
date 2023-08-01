const mongoClient = require('./mongoConfig');

const db = mongoClient.db('emojify');
const userCollection = db.collection('users');
const adminCollection = db.collection('admin');
const personCollection = db.collection('person');

module.exports = { userCollection, adminCollection, personCollection };
