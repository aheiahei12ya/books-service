import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
class FiveInsurancesOneFund {
  // 五险一金id
  @PrimaryColumn()
  id?: string

  // 养老金个人（8%）
  @Column()
  pensionPersonal?: string

  // 养老金企业（20%）
  @Column()
  pensionEnterprise?: string

  // 医疗金个人（2%）
  @Column()
  healthcarePersonal?: string

  // 医疗金企业（10%）
  @Column()
  healthcareEnterprise?: string

  // 失业保险个人（0.5%）
  @Column()
  unemploymentPersonal?: string

  // 失业保险企业（1%）
  @Column()
  unemploymentEnterprise?: string

  // 生育保险个人（0）
  @Column()
  maternityPersonal?: string

  // 生育保险企业（1%）
  @Column()
  maternityEnterprise?: string

  // 工伤保险个人（0）
  @Column()
  compensationPersonal?: string

  // 工伤保险企业（0.2-1.9）
  @Column()
  compensationEnterprise?: string

  // 公积金个人（7%）
  @Column()
  housingPersonal?: string

  // 公积金企业（7%）
  @Column()
  housingEnterprise?: string

  // 补充公积金个人（5%）
  @Column()
  additionalHousingPersonal?: string

  // 补充公积金企业（5%）
  @Column()
  additionalHousingEnterprise?: string

  // 基数
  @Column()
  base?: string

  // 基数上限
  @Column()
  baseLimit?: string

  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string
}

export default [FiveInsurancesOneFund]
