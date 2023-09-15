const express = require('express');
const { personCollection } = require('../../libs/collections');
const response = require('../../utils/response');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, image, dob, dop, bio } = req.body;
    const insertResult = await personCollection.insertOne({
      name,
      image,
      dob,
      dop,
      bio,
      works: [],
    });

    if (!insertResult.acknowledged)
      return res.send(
        response({ error: true, msg: 'Could not create the person!' })
      );

    res.send(response({ msg: 'Person created!' }));
  } catch (err) {
    console.log(err);
    res.send(response({ error: true, msg: 'Something went wrong' }));
  }
});

module.exports = router;
