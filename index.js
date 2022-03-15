const express = require('express');
const cors = require('cors');
const app = express()
port = 3000;
app.use(cors())
app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
});