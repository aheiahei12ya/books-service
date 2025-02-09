import { Column, Entity } from 'typeorm'

import { BaseSort, BaseSortRelation } from '@/entity/Base'

@Entity()
export class Category extends BaseSortRelation {}

@Entity()
export class FirstLevelSort extends BaseSort {
  // 分类 id
  @Column()
  categoryId?: number
}

@Entity()
export class SecondLevelSort extends BaseSort {
  // 父类 id (FirstLevelSortId)
  @Column()
  parentSortId?: number
}

@Entity()
export class Method extends BaseSort {
  // 分类 id
  @Column()
  categoryId?: number
}

export default [Method, Category, FirstLevelSort, SecondLevelSort]
