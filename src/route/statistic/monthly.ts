import {
  monthlyStatisticCreate,
  monthlyStatisticDetail,
  monthlyStatisticList,
  monthlyStatisticModify,
  monthlyStatisticRemove
} from '@/service/statistic/monthly'
import {
  monthlyStatisticCreateInterface,
  monthlyStatisticDetailInterface,
  monthlyStatisticListInterface,
  monthlyStatisticModifyInterface,
  monthlyStatisticRemoveInterface
} from '@/service/statistic/monthly/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: monthlyStatisticList,
    validator: monthlyStatisticListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: monthlyStatisticDetail,
    validator: monthlyStatisticDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: monthlyStatisticCreate,
    validator: monthlyStatisticCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: monthlyStatisticModify,
    validator: monthlyStatisticModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: monthlyStatisticRemove,
    validator: monthlyStatisticRemoveInterface
  }
]

export default router
