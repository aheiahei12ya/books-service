import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
export class Group extends Base {
  // 类型
  @Column()
  type?: number

  // 名称
  @Column({
    length: 64
  })
  name?: string

  // 图标
  @Column({
    length: 32
  })
  icon?: string

  // 允许搜索发现
  @Column()
  allowSearch?: boolean

  // 需要审批加入
  @Column()
  joinPermission?: boolean

  // 邀请加入密钥
  @Column({
    length: 64
  })
  inviteKey?: string

  // 创建人 id
  @Column()
  creatorId?: string
}

export default [Group]
