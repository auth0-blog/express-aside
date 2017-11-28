// importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth0 = require('./auth0');

// configuring Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// defining contacts array and endpoints to manipulate it
const contacts = [
    { name: 'Bruno Krebs', phone: '+555133334444' },
    { name: 'John Doe', phone: '+191843243223' }
];
app.get('/contacts', auth0(['read:contacts']), (req, res) => res.send(contacts));
app.post('/contacts', auth0(['add:contacts']), (req, res) => {
    contacts.push(req.body);
    res.send();
});

// starting Express
app.listen(3000, () => console.log('Example app listening on port 3000!'));