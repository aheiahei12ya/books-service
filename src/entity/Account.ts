import { Column, Entity } from 'typeorm'

import { BaseGroup, BaseSort } from '@/entity/Base'

@Entity()
class Account extends BaseSort {
  // 用户 id
  @Column()
  userId?: string

  // 类型
  @Column()
  type?: number

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
class GroupAccount extends BaseGroup {
  // 账户 id
  @Column()
  accountId?: string
}

export default [Account, GroupAccount]
