const express = require('express');
// Task 10 reviews
const router = express.Router();

router.use((req, res, next) => {
    if (req.body.auth !== true) {
        res.send('You are unauthorized :(')
    } else {
        next()
    }
})

let boardgames = [ //name, max_players, category, avg_rating
    { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8 },
    { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62 },
    { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66 },
    { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43 },
    { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7 },
    { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34 },
    { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1 },
    { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88 }
]

let reviews = [];

// Task 7a
const contentCheck = (req, res, next) => {
    const content = req.body.content;
    if (content.length < 5) {
        res.send('Please provide a longer review')
    } else {
        next()
    }
}

const gameIndexCheck = (req, res, next) => {
    const gameId = req.body.gameId
    const totalGames = boardgames.length
    if (gameId < totalGames) {
        next()
    } else {
        res.send('Please provide a valid gameId')
    }
}

// Task 4
router.post('/reviews', contentCheck, gameIndexCheck, (req, res) => {
    console.log(req.body)
    reviews.push(req.body)
    res.json({ message: "Success", reviews })
})


module.exports = router