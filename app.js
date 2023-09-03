var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors')

const accountRouter = require('./routes/account');
const categoryRouter = require('./routes/category');
const expenseRouter = require('./routes/expense');
const incomeRouter = require('./routes/income');
const paymentMethodRouter = require('./routes/paymentMethod');
const platformRouter = require('./routes/platform');
const settingRouter = require('./routes/setting');
const shortcutRouter = require('./routes/shortcut');
const statisticRouter = require('./routes/statistic');
const transactionRouter = require('./routes/transaction');
const userRouter = require('./routes/user');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/transaction', transactionRouter)
app.use('/api/account', accountRouter)
app.use('/api/category', categoryRouter)
app.use('/api/expense', expenseRouter)
app.use('/api/income', incomeRouter)
app.use('/api/paymentMethod', paymentMethodRouter)
app.use('/api/platform', platformRouter)
app.use('/api/setting', settingRouter)
app.use('/api/shortcut', shortcutRouter)
app.use('/api/statistics', statisticRouter)
app.use('/api/user', userRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
