import { Column, Entity, PrimaryColumn } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
class User extends Base {
  // 昵称
  @Column({
    length: 64
  })
  nickname?: string

  // 密码
  @Column({
    length: 128
  })
  password?: string

  // 头像
  @Column({
    length: 512
  })
  avatar?: string

  // 最后登录时间
  @Column('datetime')
  lastLoginTime?: number
}

@Entity()
class GroupUser {
  // 群组用户 id
  @PrimaryColumn()
  id?: string

  // 群组 id
  @Column()
  groupId?: string

  // 用户 id
  @Column()
  userId?: string

  // 加入时间
  @Column('datetime')
  joinInTime?: number

  // 邀请人 id
  @Column('datetime')
  invitorId?: string
}

export default [User, GroupUser]
