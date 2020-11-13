const express = require('express');
const compression = require('compression')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static("public"));

// Home
app.get('/', (req, res) => {
    res.sendFile("index.html");
});

// Portfolio
app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + "/public/portfolio.html");
});

//Contact
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(PORT, () => {
    console.log("listening on http://localhost:" + PORT);
});