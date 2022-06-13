// Task 1a
const express = require('express');
const app = express();

// Task 2a
app.get('/home', (req, res) => {
    // Task 2b
    res.send('Welcome Home')
})


// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))