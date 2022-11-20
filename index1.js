const express = require('express');

const app = express();

app.use(express.static('public'));

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