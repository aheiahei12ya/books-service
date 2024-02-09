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

@Entity()
export class GroupUser extends Base {
  // 群组 id
  @Column()
  groupId!: string

  // 用户 id
  @Column()
  userId!: string

  // 邀请人 id
  @Column('datetime', {
    nullable: true
  })
  invitorId!: string

  // 用户权限
  @Column()
  permission!: string
}

export default [Group, GroupUser]
