var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./lib/connectMongoose');
require('./models/Data');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //JADE con HTML estandar

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//----------MIDDLEWARES------------

app.use(function (req,res,next) {
   //console.log('middleware a nivel de app');
   //next({status: 500, message: 'Imposible continuar'});
   next();
});

//-----------ROUTES---------------

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/clients', require('./routes/clients'));
app.use('/apiv1/datas', require('./routes/apiv1/datas'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    if(isAPI(req)){
        return res.json({ok: false, error: err.message});
    }
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

function isAPI(req) {
    //console.log(req.originalUrl);
    return req.originalUrl.indexOf('/api')===0;
}

module.exports = app;
