import {
  classification,
  expenseTimes,
  historyToday,
  methodReminder
} from '@/services/statistic'
import {
  balanceTrend,
  expenseHistogram,
  expenseTrend
} from '@/services/statistic/trend'

const router = [
  {
    method: 'post',
    path: '/expense-trend',
    action: expenseTrend
  },
  {
    method: 'post',
    path: '/balance-trend',
    action: balanceTrend
  },
  {
    method: 'post',
    path: '/expense',
    action: expenseHistogram
  },
  {
    method: 'post',
    path: '/expense-times',
    action: expenseTimes
  },
  {
    method: 'post',
    path: '/history-today',
    action: historyToday
  },
  {
    method: 'post',
    path: '/method-reminder',
    action: methodReminder
  },
  {
    method: 'post',
    path: '/classification',
    action: classification
  }
]

export default router
