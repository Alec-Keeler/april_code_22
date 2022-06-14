// Task 1a
const express = require('express');
const app = express();
const reviewsRouter = require('./routes/reviews');
const boardgamesRouter = require('./routes/boardgames');

// Task 4a
app.use(express.json()) //next()
app.use(express.static('public'))  // link(rel="stylesheet", href="/css/test.css")


// Task 7c
app.use((req, res, next) => {
    console.log(`Path: ${req.path}, Method: ${req.method}`)
    req.banana = true
    if (req.path === '/banana') {
        const err = new Error('What is with banana???')
        next(err)
    } else {
        next()
    }
})
// Task 10
app.use('/reviews', reviewsRouter)
app.use('/boardgames', boardgamesRouter)
// Task 2a
app.get('/home', (req, res) => {
    // Task 2b
    res.send('Welcome Home')
})

// let boardgames = [ //name, max_players, category, avg_rating
//     { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8 },
//     { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62 },
//     { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66 },
//     { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43 },
//     { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7 },
//     { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34 },
//     { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1 },
//     { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88 }
// ]

// let reviews = [];

// // Task 3
// app.get(['/boardgames', '/games'], (req, res) => {
//     let names = [];
//     for (let i = 0; i < boardgames.length; i++) {
//         // const game = boardgames[i];
//         names.push(boardgames[i].name)
//     }
//     res.json({names})
// })



// // Task 5a
// app.get('/boardgames/total', (req, res) => {
//     console.log(req.banana)
//     res.send(`${boardgames.length}`)
// })

// // Task 6
// app.get('/boardgames/category', (req, res) => {
//     console.log(req.query)
//     const category = req.query.category
//     let games = []
//     for (let i = 0; i < boardgames.length; i++) {
//         const game = boardgames[i];
//         if (game.category === category) {
//             games.push(game.name)
//         }
//     }
//     res.json({ games })
// })

// // Task 5b
// app.get('/boardgames/:index', (req, res) => {
//     console.log(req.params.index)
//     res.send(boardgames[req.params.index].name)
// })

// app.post('/boardgames', (req, res) => {
//     boardgames.push(req.body)
//     res.status(201)
//     // res.contentType('application/json')
//     res.json(boardgames)
//     // res.send(boardgames)
// })

// // Task 7a
// const contentCheck = (req, res, next) => {
//     const content = req.body.content;
//     if (content.length < 5)  {
//         res.send('Please provide a longer review')
//     } else {
//         next()
//     }
// }

// const gameIndexCheck = (req, res, next) => {
//     const gameId = req.body.gameId
//     const totalGames = boardgames.length
//     if (gameId < totalGames) {
//         next()
//     } else {
//         res.send('Please provide a valid gameId')
//     }
// }

// // Task 4
// app.post('/reviews', contentCheck, gameIndexCheck, (req, res) => {
//     console.log(req.body)
//     reviews.push(req.body)
//     res.json({message: "Success", reviews})
// })

app.use((req, res, next) => {
    console.log('Inside final middleware')
    const err = new Error('The page you were looking for could not be found :(')
    err.status = 404
    next(err)
})

// Task 9
app.use((req, res, next) => {
    console.log('HOW DID I GET HERE?')
    next()
})

app.use((err, req, res, next) => {
    console.log('Status:', err.status, err.message)
    res.send('There was an error')
    // next(err)
})

// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))
