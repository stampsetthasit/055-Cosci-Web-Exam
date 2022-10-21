const express = require('express');
const path = require('path');

const app = express();

const session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    name: 'user',
    secret: '055Setth@sitP00s@w@t',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    },
    rolling: true,
}))

app.use("/images", express.static(path.join(__dirname, '/public/images')));
app.use("/css", express.static(path.join(__dirname, '/public/css')));
app.use('/api', require('./middlewares/api'));
app.use('/', require('./middlewares/view'));
// app.use('/', require('./routes/routes'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html')
// });

// app.get('/aboutus', (req, res) => {
//     res.sendFile(__dirname + '/views/aboutus.html')
// });

// app.get('/strategicplanning', (req, res) => {
//     res.sendFile(__dirname + '/views/strategic-planning.html')
// });

// app.get('/gallery', (req, res) => {
//     res.sendFile(__dirname + '/views/gallery.html')
// });

// app.get('/contactus', (req, res) => {
//     res.sendFile(__dirname + '/views/contactus.html')
// });

// app.get('/signin', (req, res) => {
//     res.sendFile(__dirname + '/views/sign-in.html')
// });

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}. | http://localhost:${port}`);
});