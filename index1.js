const express = require('express');
const rateLimit = require('express-rate-limit')

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 100 requests per `window` (here, per 1 minute)
});

app.use(express.static('public'));

// Apply the rate limiting middleware to all requests
app.use(limiter);

let votesYes = 0;
let votesNo = 0;

app.get('/vote/yes', (req, res) => {
    votesYes++;
    res.send('Dziękujemy za głos!');
});

app.get('/vote/no', (req, res) => {
    votesNo++;
    res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => {
    res.send(`Liczba głosów za pitcą: ${votesYes}, liczba głosów przeciwko pitcy: ${votesNo}.`);
});

app.listen(3000);