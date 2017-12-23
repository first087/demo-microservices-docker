const express = require('express')
const app = express()

let counter = 0

app.get('/', (req, res) => {
    res.send({
        ip: require('ip').address(),
        counter: ++counter,
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

app.listen(3000, () => console.log('Example app listening on port 3000!'))
