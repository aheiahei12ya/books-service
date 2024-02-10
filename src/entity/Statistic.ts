import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
export class MonthlyStatistic extends Base {
  // 账本 id
  @Column()
  ledgerId?: string

  // 年份
  @Column()
  year?: string

  // 月份
  @Column()
  month?: string

  // 月度开销
  @Column()
  expense?: string

  // 月度收入
  @Column()
  income?: string

  // 月度借贷
  @Column()
  loan?: string
}

export default [MonthlyStatistic]
