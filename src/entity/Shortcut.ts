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

  // 分类 id
  @Column()
  sortId?: string
}

export default [Shortcut]
