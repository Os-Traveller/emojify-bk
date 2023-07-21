const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');

//  to read env file
dotEnv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening to the port ' + port);
});

app.get('/', (_, res) => {
  res.send('Server Connected');
});
