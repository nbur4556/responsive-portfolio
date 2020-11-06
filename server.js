const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Home
app.get('/', (req, res) => {
    res.sendFile(index.html);
});

// Portfolio
app.get('/portfolio', (req, res) => {
    res.sendFile(portfolio.html);
});

//Contact
app.get('/contact', (req, res) => {
    res.sendFile(contact.html);
});

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
});