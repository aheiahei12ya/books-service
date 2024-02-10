import firstLevelSortRouter from './firstLevelSort'
import secondLevelSortRouter from './secondLevelSort'

export const sortRoutes = [
  {
    path: '/api/sort/firstLevel',
    child: firstLevelSortRouter
  },
  {
    path: '/api/sort/secondLevel',
    child: secondLevelSortRouter
  }
]
