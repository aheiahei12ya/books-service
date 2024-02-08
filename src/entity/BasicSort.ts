import { Column, Entity, PrimaryColumn } from 'typeorm'

import { BaseSort, BaseSortRelation } from '@/entity/Base'

@Entity()
class Method extends BaseSort {
  // 方式 id
  @PrimaryColumn()
  id?: string

  // 类型
  @Column()
  type?: number
}

@Entity()
class Category extends BaseSort {
  // 类别 id
  @PrimaryColumn()
  id?: string
}

@Entity()
class FirstLevelSort extends BaseSortRelation {}

@Entity()
class SecondLevelSort extends BaseSortRelation {
  // 父类 id
  @Column()
  parentId?: number
}

@Entity()
class Channel extends BaseSortRelation {
  // 类型
  @Column()
  type?: number
}

@Entity()
class Beneficiary extends BaseSortRelation {
  // 关系
  @Column()
  type?: number
}

export default [
  Method,
  Category,
  FirstLevelSort,
  SecondLevelSort,
  Channel,
  Beneficiary
]
