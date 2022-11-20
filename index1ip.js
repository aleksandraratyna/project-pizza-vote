const express = require('express');

const app = express();

app.use(express.static('static'));

let votesYes = 0;
let votesNo = 0;

const ipsThatVoted = [];

app.get('/vote/yes', (req, res) => {
    if (ipsThatVoted.includes(req.ip)) {
        res.send('Nie można głosować drugi raz :(');
    } else {
        votesYes++;
        ipsThatVoted.push(req.ip);
        console.log(ipsThatVoted);
        res.send('Dziękujemy za głos!');
    }
});

app.get('/vote/no', (req, res) => {
    if (ipsThatVoted.includes(req.ip)) {
        res.send('Nie można głosować drugi raz :(');
    } else {
        votesNo++;
        ipsThatVoted.push(req.ip);
        console.log(ipsThatVoted);
        res.send('Dziękujemy za głos!');
    }
});

app.get('/votes/check', (req, res) => {
    res.send(`Liczba głosów za pitcą: ${votesYes}, liczba głosów przeciwko pitcy: ${votesNo}.`);
});

app.listen(3000);