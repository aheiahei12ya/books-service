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
    action: transactionRouter
  },
  {
    path: '/api/account',
    action: accountRouter
  },
  {
    path: '/api/category',
    action: categoryRouter
  },
  {
    path: '/api/expense',
    action: expenseRouter
  },
  {
    path: '/api/income',
    action: incomeRouter
  },
  {
    path: '/api/method',
    action: methodRouter
  },
  {
    path: '/api/platform',
    action: platformRouter
  },
  {
    path: '/api/setting',
    action: settingRouter
  },
  {
    path: '/api/shortcut',
    action: shortcutRouter
  },
  {
    path: '/api/statistics',
    action: statisticRouter
  },
  {
    path: '/api/user',
    action: userRouter
  }
]
