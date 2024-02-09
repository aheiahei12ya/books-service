import {
  channelCreate,
  channelDetail,
  channelList,
  channelModify,
  channelRemove
} from '@/service/channel'
import {
  channelCreateInterface,
  channelDetailInterface,
  channelListInterface,
  channelModifyInterface,
  channelRemoveInterface
} from '@/service/channel/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: channelList,
    validator: channelListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: channelDetail,
    validator: channelDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: channelCreate,
    validator: channelCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: channelModify,
    validator: channelModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: channelRemove,
    validator: channelRemoveInterface
  }
]

export default router
