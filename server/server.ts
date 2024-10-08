//Requires
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//Static Routes
// app.use('/dist', express.static(path.join(__dirname, 'dist')));
// app.use(morgan('dev')) // logging
app.use(express.static(path.join(__dirname, '../client/build')));
app.use((req, res) => {
    res.status(200).send('Hello, world!');
});

//Main App Route
// app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'public/index.html')));

//Run Server
const port = 1381;
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));
