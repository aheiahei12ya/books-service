import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  // 用户 id
  @PrimaryGeneratedColumn('uuid')
  id?: string

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
  @Column('timestamp')
  lastLoginTime?: number

  // 创建时间
  @Column('timestamp')
  createTime?: number
}

@Entity()
class GroupUser {
  // 群组 id
  @Column()
  groupId?: string

  // 用户 id
  @Column()
  userId?: string

  // 加入时间
  @Column('timestamp')
  joinInTime?: number

  // 邀请人 id
  @Column('timestamp')
  invitorId?: string
}

export default [User, GroupUser]
