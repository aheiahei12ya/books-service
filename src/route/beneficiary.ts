import {
  beneficiaryCreate,
  beneficiaryDetail,
  beneficiaryList,
  beneficiaryModify,
  beneficiaryRemove
} from '@/service/beneficiary'
import {
  beneficiaryCreateInterface,
  beneficiaryDetailInterface,
  beneficiaryListInterface,
  beneficiaryModifyInterface,
  beneficiaryRemoveInterface
} from '@/service/beneficiary/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: beneficiaryList,
    validator: beneficiaryListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: beneficiaryDetail,
    validator: beneficiaryDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: beneficiaryCreate,
    validator: beneficiaryCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: beneficiaryModify,
    validator: beneficiaryModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: beneficiaryRemove,
    validator: beneficiaryRemoveInterface
  }
]

export default router
