import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
class MonthlyStatistic extends Base {
  // 年份
  @Column()
  year?: string

  // 月份
  @Column()
  month?: string

  // 月度开销
  @Column()
  expense?: number

  // 月度收入
  @Column()
  income?: string

  // 月度借贷
  @Column()
  loan?: string
}

export default [MonthlyStatistic]
