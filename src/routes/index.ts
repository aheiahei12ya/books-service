import accountRouter from './account'
import categoryRouter from './category'
import expenseRouter from './expense'
import incomeRouter from './income'
import methodRouter from './method'
import platformRouter from './platform'
import settingRouter from './setting'
import shortcutRouter from './shortcut'
import statisticRouter from './statistic'
import transactionRouter from './transaction'
import userRouter from './user'

export const routes = [
  {
    path: '/api/transaction',
    child: transactionRouter
  },
  {
    path: '/api/account',
    child: accountRouter
  },
  {
    path: '/api/category',
    child: categoryRouter
  },
  {
    path: '/api/expense',
    child: expenseRouter
  },
  {
    path: '/api/income',
    child: incomeRouter
  },
  {
    path: '/api/method',
    child: methodRouter
  },
  {
    path: '/api/platform',
    child: platformRouter
  },
  {
    path: '/api/setting',
    child: settingRouter
  },
  {
    path: '/api/shortcut',
    child: shortcutRouter
  },
  {
    path: '/api/statistics',
    child: statisticRouter
  },
  {
    path: '/api/user',
    child: userRouter
  }
]
