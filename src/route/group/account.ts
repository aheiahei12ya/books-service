import {
  groupAccountCreate,
  groupAccountDetail,
  groupAccountList,
  groupAccountModify,
  groupAccountRemove
} from '@/service/group/account'
import {
  groupAccountCreateInterface,
  groupAccountDetailInterface,
  groupAccountListInterface,
  groupAccountModifyInterface,
  groupAccountRemoveInterface
} from '@/service/group/account/interface'

const router = [
  {
    method: 'post',
    path: '/list',
    action: groupAccountList,
    validator: groupAccountListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: groupAccountDetail,
    validator: groupAccountDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: groupAccountCreate,
    validator: groupAccountCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: groupAccountModify,
    validator: groupAccountModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: groupAccountRemove,
    validator: groupAccountRemoveInterface
  }
]

export default router
