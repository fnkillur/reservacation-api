var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
    info: {
        title: 'RESERVACATION API',
        version: '1.0.0',
        description: 'reservacation api 가이드입니다.',
    },
    // securityDefinitions: {
    //     jwt: {
    //         type: 'apiKey',
    //         name: 'Authorization',
    //         in: 'header'
    //     }
    // },
    // security: [
    //     { jwt: [] }
    // ]
};
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ["routes/index.js"],
};
var swaggerSpec = swaggerJSDoc(options);
var whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000'];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// CORS
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send({error: 'Not found'})
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send({error: err})
});

module.exports = app;