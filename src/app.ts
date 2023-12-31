require('./alias');

import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {
  accountRouter,
  categoryRouter,
  expenseRouter,
  incomeRouter,
  methodRouter,
  platformRouter,
  settingRouter,
  shortcutRouter,
  statisticRouter,
  transactionRouter,
  userRouter,
} from '@/routes';

let cors = require('cors');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/transaction', transactionRouter);
app.use('/api/account', accountRouter);
app.use('/api/category', categoryRouter);
app.use('/api/expense', expenseRouter);
app.use('/api/income', incomeRouter);
app.use('/api/method', methodRouter);
app.use('/api/platform', platformRouter);
app.use('/api/setting', settingRouter);
app.use('/api/shortcut', shortcutRouter);
app.use('/api/statistics', statisticRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
app.use(function (
  err: { message: any; status: any },
  req: { app: { get: (arg0: string) => string } },
  res: {
    locals: { message: any; error: any };
    status: (arg0: any) => void;
    render: (arg0: string) => void;
  },
  next: any,
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export { app };
