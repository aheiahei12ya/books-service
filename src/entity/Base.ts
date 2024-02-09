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
  // 归属人id
  @Column()
  ownerId?: string

  @Column('datetime')
  // 加入时间
  joinInTime?: number
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

  // 受益人 id
  @Column()
  beneficiaryId?: string

  // 方式 id
  @Column()
  methodId?: string

  // 账户 id
  @Column()
  accountId?: string

  // 渠道 id
  @Column()
  channelId?: string

  // 一级分类 id
  @Column()
  firstLevelSortId?: string

  // 二级分类 id
  @Column()
  secondLevelSortId?: string

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
  serialNumber?: number
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
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string
}
