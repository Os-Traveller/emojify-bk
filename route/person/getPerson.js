const express = require('express');
const { personCollection } = require('../../libs/collections');
const response = require('../../utils/response');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const personsAllInfo = await personCollection.find({}).toArray();
    if (!personsAllInfo) return res.send(response({ okay: true, data: [] }));
    const personsInfo = personsAllInfo.map((person) => {
      return {
        _id: person._id,
        name: person.name,
        image: person.image,
      };
    });

    res.send(response({ okay: true, data: personsInfo }));
  } catch (err) {
    console.log(err);
    res.send(response({ error: true, msg: 'Something went wrong' }));
  }
});

module.exports = router;
