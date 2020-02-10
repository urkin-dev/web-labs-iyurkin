let 
    express = require(`express`),
    http    = require(`http`),
    path    = require(`path`),
    logger  = require(`morgan`);

let app = express();

let indexRouter = require(`./routes/index`);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger("combined"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

app.use(`/`, indexRouter);

let server = http.createServer(app);

server.listen(5500, () => { console.log(`Server is running`) });
