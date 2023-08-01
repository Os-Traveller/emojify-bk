const express = require('express');
const { adminCollection } = require('../libs/collections');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminCollection.findOne({ email });
  if (!admin) return res.send({ okay: false, msg: 'Admin not found' });

  if (admin.password !== password)
    return res.send({ okay: false, msg: 'Wrong Password' });

  return res.send({ okay: true, msg: 'Login Successful' });
});

module.exports = router;
