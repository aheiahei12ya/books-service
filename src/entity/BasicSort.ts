import { Column, Entity } from 'typeorm'

import { BaseSort, BaseSortRelation } from '@/entity/Base'

@Entity()
export class Category extends BaseSortRelation {}

@Entity()
export class Sort extends BaseSort {
  // 分类 id
  @Column()
  sortId?: number

  @Column({
    length: 8
  })
  color?: string
}

@Entity()
export class Method extends BaseSort {
  // 分类 id
  @Column()
  methodId?: number
}

export default [Method, Category, Sort]
