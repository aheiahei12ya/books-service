import { Column, Entity } from 'typeorm'

import { BaseGroup, BaseSort } from '@/entity/Base'

@Entity()
export class Ledger extends BaseSort {
  // 用户 id
  @Column()
  userId?: string

  // 类型
  @Column()
  type?: number

  // 账本状态
  @Column()
  status?: number

  // 停用日期
  @Column('datetime', {
    nullable: true
  })
  disableTime?: number

  // 是否共享
  @Column()
  share?: boolean
}

@Entity()
export class GroupLedger extends BaseGroup {
  // 账本 id
  @Column()
  ledgerId?: string
}

export default [Ledger, GroupLedger]
