const express = require('express');
const app = express()
port = 3000;

app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
});