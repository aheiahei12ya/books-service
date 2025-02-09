import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
export class UserSetting extends Base {
  // 用户 id
  @Column()
  userId?: string

  // 默认收入账本 id
  @Column()
  incomeLedgerId?: string

  // 默认支出账本 id
  @Column()
  expenseLedgerId?: string

  // 默认模式（先知/普通）
  @Column()
  mode?: boolean

  // 自动记录（先知模式自动开启）
  @Column()
  automatic?: boolean
}

@Entity()
export class LedgerSetting extends Base {
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string

  // 默认类别 id
  @Column()
  categoryId?: string

  // 默认账户 id
  @Column()
  accountId?: string

  // 默认方式 id
  @Column()
  methodId?: string

  // 默认一级分类 id
  @Column()
  firstLevelSortId?: string

  // 默认二级分类 id
  @Column()
  secondLevelSortId?: string
}

export default [UserSetting, LedgerSetting]
