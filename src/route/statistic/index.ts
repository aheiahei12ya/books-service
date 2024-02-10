import monthlyRouter from './monthly'
import statisticRouter from './statistic'

export const statisticRoutes = [
  {
    path: '/api/statistics',
    child: statisticRouter
  },
  {
    path: '/api/statistics/monthly',
    child: monthlyRouter
  }
]
