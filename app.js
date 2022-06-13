// Task 1a
const express = require('express');
const app = express();

// Task 4a
app.use(express.json())

// Task 2a
app.get('/home', (req, res) => {
    // Task 2b
    res.send('Welcome Home')
})

let boardgames = [ //name, max_players, category, avg_rating
    {name: 'Gloomhaven'},
    {name: 'Pandemic Legacy: Season 1'},
    {name: 'Brass: Birmingham'},
    {name: 'Terraforming Mars'},
    {name: 'Twilight Imperium: Fourth Edition'},
    {name: 'Spirit Island'},
    {name: 'Mage Knight'},
    {name: 'Rising Sun'}
]

let reviews = [];

// Task 3
app.get(['/boardgames', '/games'], (req, res) => {
    let names = [];
    for (let i = 0; i < boardgames.length; i++) {
        // const game = boardgames[i];
        names.push(boardgames[i].name)
    }
    res.json({names})
})

// Task 4
app.post('/reviews', (req, res) => {
    console.log(req.body)
    reviews.push(req.body)
    res.json({message: "Success", reviews})
})


// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))
