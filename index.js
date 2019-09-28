const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(require('./routes/routes'));

app.listen(port, () => console.log(`Sweet Tooth app listening on port ${port}!`));