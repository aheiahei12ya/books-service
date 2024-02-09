import { Column, Entity } from 'typeorm'

import { BaseSort } from '@/entity/Base'

@Entity()
export class Account extends BaseSort {
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

  // 账单日
  @Column('datetime', {
    nullable: true
  })
  billDate?: number

  // 还款时间
  @Column('datetime', {
    nullable: true
  })
  repaymentTime?: number

  // 上次还款时间
  @Column('datetime', {
    nullable: true
  })
  lastRepaymentTime?: number

  // 账户状态
  @Column()
  status?: number

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
  @Column('datetime', {
    nullable: true
  })
  resetTime?: number
}

export default [Account]
