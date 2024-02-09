import {
  groupUserCreate,
  groupUserDetail,
  groupUserList,
  groupUserModify,
  groupUserRemove
} from '@/service/group/user'
import {
  groupUserCreateInterface,
  groupUserDetailInterface,
  groupUserListInterface,
  groupUserModifyInterface,
  groupUserRemoveInterface
} from '@/service/group/user/interface'

const router = [
  {
    method: 'post',
    path: '/list',
    action: groupUserList,
    validator: groupUserListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: groupUserDetail,
    validator: groupUserDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: groupUserCreate,
    validator: groupUserCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: groupUserModify,
    validator: groupUserModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: groupUserRemove,
    validator: groupUserRemoveInterface
  }
]

export default router
