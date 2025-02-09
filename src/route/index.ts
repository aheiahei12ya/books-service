import accountRouter from './account'
import categoryRouter from './category'
import { fundRoutes } from './fund'
import { groupRoutes } from './group'
import ledgerRouter from './ledger'
import methodRouter from './method'
import { settingRoutes } from './setting'
import shortcutRouter from './shortcut'
import { sortRoutes } from './sort'
import { statisticRoutes } from './statistic'
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
    path: '/api/method',
    child: methodRouter
  },
  {
    path: '/api/shortcut',
    child: shortcutRouter
  },
  {
    path: '/api/user',
    child: userRouter
  },
  {
    path: '/api/ledger',
    child: ledgerRouter
  },
  ...fundRoutes,
  ...sortRoutes,
  ...groupRoutes,
  ...settingRoutes,
  ...statisticRoutes
]
