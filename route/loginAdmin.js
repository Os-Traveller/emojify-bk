const express = require('express');
const { adminCollection } = require('../libs/collections');
const response = require('../utils/response');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminCollection.findOne({ email });
    if (!admin)
      return res.send(response({ error: true, msg: 'User not found!' }));

    if (admin.password !== password)
      return res.send(response({ error: true, msg: 'Incorrect Password!' }));

    return res.send(response({ msg: 'Login Successful' }));
  } catch (err) {
    console.log(err);
    res.send(response({ error: true, msg: 'Something went wrong' }));
  }
});

module.exports = router;
