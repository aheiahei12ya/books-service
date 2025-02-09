import { Column, Entity } from 'typeorm'

import { Base } from '@/entity/Base'

@Entity()
export class Shortcut extends Base {
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string

  // 类别 id
  @Column()
  categoryId?: string

  // 账户 id
  @Column()
  accountId?: string

  // 方式 id
  @Column()
  methodId?: string

  // 受益人 id
  @Column()
  beneficiaryId?: string

  // 一级分类 id
  @Column()
  firstLevelSortId?: string

  // 二级分类 id
  @Column()
  secondLevelSortId?: string
}

export default [Shortcut]
