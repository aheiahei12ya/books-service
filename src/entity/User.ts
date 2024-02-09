import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
export class User extends Base {
  // 账号
  @Column()
  account!: string

  // 密码
  @Column({
    length: 128
  })
  password!: string

  // 昵称
  @Column({
    length: 64
  })
  nickname!: string

  // 头像
  @Column({
    length: 512
  })
  avatar?: string

  // 最后登录时间
  @Column('datetime', {
    nullable: true
  })
  lastLoginTime?: number
}

export default [User]
