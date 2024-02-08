import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Ledger {
  // 账本 id
  @PrimaryGeneratedColumn('uuid')
  id?: string

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

  // 创建日期
  @Column('timestamp')
  createTime?: number

  // 停用日期
  @Column('timestamp')
  disableTime?: number

  // 是否共享
  @Column()
  share?: boolean
}

@Entity()
export class GroupLedger {
  // 群组 id
  @Column('uuid')
  groupId?: string

  // 账户 id
  @Column('uuid')
  accountId?: string

  // 归属人id
  @Column('uuid')
  ownerId?: string

  @Column('timestamp')
  // 加入时间
  joinInTime?: number
}

export default [Ledger, GroupLedger]
