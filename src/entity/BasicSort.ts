import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

abstract class BaseField {
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

abstract class BaseRelation extends BaseField {
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string
}

@Entity()
class Method extends BaseField {
  // 方式 id
  @PrimaryGeneratedColumn('increment')
  id?: string

  // 类型
  @Column()
  type?: number
}

@Entity()
class Category extends BaseField {
  // 类别 id
  @PrimaryGeneratedColumn('increment')
  id?: string
}

@Entity()
class FirstLevelSort extends BaseRelation {
  // 分类 id
  @PrimaryGeneratedColumn('increment')
  id?: number
}

@Entity()
class SecondLevelSort extends BaseRelation {
  // 分类 id
  @PrimaryGeneratedColumn('increment')
  id?: number

  // 父类 id
  @Column()
  parentId?: number
}

@Entity()
class Channel extends BaseRelation {
  // 渠道 id
  @PrimaryGeneratedColumn('increment')
  id?: number

  // 类型
  @Column()
  type?: number
}

@Entity()
class Beneficiary extends BaseRelation {
  // 受益人 id
  @PrimaryGeneratedColumn('increment')
  id?: number

  // 关系
  @Column()
  type?: number
}

export default [Method, Category, FirstLevelSort, SecondLevelSort, Channel, Beneficiary]
