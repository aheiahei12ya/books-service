import { Column, Entity, PrimaryColumn } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
class Ledger extends Base {
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

  // 账本状态
  @Column()
  ledgerStatus?: number

  // 停用日期
  @Column('datetime')
  disableTime?: number

  // 是否共享
  @Column()
  share?: boolean
}

@Entity()
class GroupLedger extends Base {
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

export default [Ledger, GroupLedger]
