const express = require('express')
const redis = require('redis')

const app = express()

const redisClient = redis.createClient(6379, 'localhost')

app.get('/', (req, res) => {
    redisClient.incr('counter')

    redisClient.get('counter', (err, reply) => {
        res.send({
            ip: require('ip').address(),
            counter: Number(reply),
            date: new Date(),
            note: {
                at: "Comscicafe",
                by: "Ethan's Blog",
                website: "http://www.artit-k.com",
                fbPage: "@ethanblog",
                sponsor: {
                    by: "roofimon",
                    website: "http://www.roofimon.com/",
                },
            },
        })
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
