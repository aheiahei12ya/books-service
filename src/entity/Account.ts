import { Column, Entity, PrimaryColumn } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
class Account extends Base {
  // 用户 id
  @Column()
  userId?: string

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

  // 序号
  @Column()
  serialNumber?: number

  // 余额
  @Column({
    length: 16
  })
  balance?: string

  // 还款时间
  @Column('datetime')
  repaymentTime?: number

  // 还款状态
  @Column()
  repaymentStatus?: number

  // 账户状态
  @Column()
  accountStatus?: number

  // 总计收入
  @Column({
    length: 16
  })
  totalIncome?: string

  // 总计开销
  @Column({
    length: 16
  })
  totalExpense?: string

  // 重置时间
  @Column('datetime')
  resetTime?: number
}

@Entity()
class GroupAccount extends Base {
  // 群组 id
  @PrimaryColumn()
  groupId?: string

  // 账户 id
  @Column('uuid')
  accountId?: string

  // 归属人id
  @Column('uuid')
  ownerId?: string

  @Column('datetime')
  // 加入时间
  joinInTime?: number
}

export default [Account, GroupAccount]
