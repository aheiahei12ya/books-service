import { Column, PrimaryColumn } from 'typeorm'

export abstract class Base {
  // 所有表的 id，需要手工设置
  @PrimaryColumn()
  id?: string

  // 创建时间
  @Column('datetime')
  createTime?: number

  // 修改时间
  @Column('datetime')
  modifyTime?: number

  constructor() {
    this.createTime = new Date().getTime()
    this.modifyTime = new Date().getTime()
  }
}

export abstract class BaseGroup extends Base {
  // 群组 id
  @Column()
  groupId?: string

  // 归属人id
  @Column()
  ownerId?: string
}

export abstract class BaseBill extends Base {
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string

  // 类别 id
  @Column()
  categoryId?: string

  // 方式 id
  @Column()
  methodId?: string

  // 账户 id
  @Column()
  accountId?: string

  // 分类 id
  @Column()
  sortId?: string

  // 记录时间
  @Column('datetime')
  recordTime?: number
}

export abstract class BaseSort extends Base {
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
  rank?: number

  // 使用次数
  @Column()
  usage?: number
}

export abstract class AutoRecordBill extends BaseBill {
  // 备注模版
  @Column()
  noteTemplate?: string

  // 上次更新日期
  @Column('datetime')
  updateTime?: number

  // 当前状态
  @Column()
  status?: number

  // 开始时间
  @Column('datetime')
  startTime?: number
}

export abstract class ManualRecordBill extends BaseBill {
  // 备注
  @Column()
  note?: string
}

export abstract class BaseSortRelation extends BaseSort {
  // 账本 id
  @Column()
  ledgerId?: string
}
