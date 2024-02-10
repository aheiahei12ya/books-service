import accountRouter from './account'
import beneficiaryRouter from './beneficiary'
import categoryRouter from './category'
import channelRouter from './channel'
import expenseRouter from './expense'
import { groupRoutes } from './group'
import incomeRouter from './income'
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
    path: '/api/channel',
    child: channelRouter
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
  {
    path: '/api/beneficiary',
    child: beneficiaryRouter
  },
  ...sortRoutes,
  ...groupRoutes,
  ...settingRoutes,
  ...statisticRoutes
]
