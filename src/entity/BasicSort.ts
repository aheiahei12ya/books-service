import { Column, Entity } from 'typeorm'

import { BaseSort, BaseSortRelation } from '@/entity/Base'

@Entity()
export class Category extends BaseSortRelation {}

@Entity()
export class Sort extends BaseSort {
  // 分类 id
  @Column()
  categoryId?: number
}

@Entity()
export class Method extends BaseSort {
  // 分类 id
  @Column()
  categoryId?: number
}

export default [Method, Category, Sort]
