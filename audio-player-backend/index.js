const express = require ('express')
const app = express()
const cors = require('cors')
const songs = require('./songs')

app.use(cors())

const data = {
    songs: songs.getSongs()
}

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(8080, () => { 
    console.log(`Server Started on http://localhost:8080`)
})