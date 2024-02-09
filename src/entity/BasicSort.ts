import { Column, Entity } from 'typeorm'

import { BaseSort, BaseSortRelation } from '@/entity/Base'

@Entity()
export class Category extends BaseSort {}

@Entity()
export class Method extends BaseSortRelation {
  // 分类 id
  @Column()
  categoryId?: number
}

@Entity()
export class FirstLevelSort extends BaseSortRelation {}

@Entity()
export class SecondLevelSort extends BaseSortRelation {
  // 父类 id
  @Column()
  parentId?: number
}

@Entity()
export class Channel extends BaseSortRelation {
  // 分类 id
  @Column()
  categoryId?: number
}

@Entity()
export class Beneficiary extends BaseSortRelation {
  // 关系
  @Column()
  relationship?: number
}

export default [
  Method,
  Category,
  FirstLevelSort,
  SecondLevelSort,
  Channel,
  Beneficiary
]
