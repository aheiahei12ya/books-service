import { Column, Entity } from 'typeorm'

abstract class BaseField {
  // 用户 id
  @Column()
  userId?: string

  // 账本 id
  @Column()
  ledgerId?: string

  // 类别 id
  @Column()
  categoryId?: string

  // 受益人 id
  @Column()
  beneficiaryId?: string

  // 方式 id
  @Column()
  methodId?: string

  // 账户 id
  @Column()
  accountId?: string

  // 渠道 id
  @Column()
  channelId?: string

  // 一级分类 id
  @Column()
  firstLevelSortId?: string

  // 二级分类 id
  @Column()
  secondLevelSortId?: string

  // 记录时间
  @Column('timestamp')
  recordTime?: number

  // 创建时间
  @Column('timestamp')
  createTime?: number

  // 修改时间
  @Column('timestamp')
  modifyTime?: number
}

abstract class AutoRecordField extends BaseField {
  // 备注模版
  @Column()
  noteTemplate?: string

  // 上次更新日期
  @Column('timestamp')
  updateTime?: number

  // 当前状态
  @Column()
  status?: number

  // 开始时间
  @Column('timestamp')
  startTime?: number
}

abstract class ManualRecordField extends BaseField {
  // 备注
  @Column()
  note?: string
}

@Entity()
class Bill extends ManualRecordField {
  // 账单 id
  @Column()
  id?: string

  // 原始金额
  @Column()
  originAmount?: string

  // 优惠金额
  @Column()
  discountAmount?: string

  // 实际金额
  @Column()
  realAmount?: string
}

@Entity()
class AdditionalBill extends ManualRecordField {
  // 追加账单 id
  @Column()
  id?: string

  // 账单 id
  @Column()
  billId?: string

  // 追加类型
  @Column()
  additionalType?: string

  // 追加金额
  @Column()
  additionalAmount?: string
}

@Entity()
class Reimbursement extends ManualRecordField {
  // 报销 id
  @Column()
  id?: string

  // 报销金额
  @Column()
  amount?: string

  // 报销状态
  @Column()
  status?: number

  // 报销日期
  @Column('timestamp')
  reimbursementTime?: number
}

@Entity()
class Installment extends AutoRecordField {
  // 分期付款 id
  @Column()
  id?: string

  // 总金额
  @Column()
  totalAmount?: string

  // 优惠金额
  @Column()
  discountAmount?: string

  // 实际金额
  @Column()
  realAmount?: string

  // 分期数
  @Column()
  installmentCount?: number

  // 分期利率
  @Column()
  installmentInterestRate?: string

  // 每期金额
  @Column()
  monthlyAmount?: number

  // 每期利息
  @Column()
  monthlyInterest?: string
}

@Entity()
class Automatic extends AutoRecordField {
  // 自动记录 id
  @Column()
  id?: string

  // 总金额
  @Column()
  totalAmount?: string

  // 优惠金额
  @Column()
  discountAmount?: string

  // 实际金额
  @Column()
  realAmount?: string

  // 每期金额
  @Column()
  monthlyAmount?: number

  // 记录次数
  @Column()
  count?: number

  // 记录频率
  @Column()
  frequency?: number
}

@Entity()
class Loan extends AutoRecordField {
  // 贷款 id
  @Column()
  id?: string

  // 贷款金额
  @Column()
  amount?: string

  // 贷款时长
  @Column()
  time?: number

  // 贷款利率
  @Column()
  interestRate?: string

  // 还款方式
  @Column()
  repaymentMethod?: number
}

@Entity()
class Salary extends AutoRecordField {
  // 工资 id
  @Column()
  id?: string

  // 合同工资
  @Column()
  salary?: string

  // 工资税
  @Column()
  tax?: number

  // 四金 id
  @Column()
  fiveInsurancesOneFundId?: string

  // 四金总数
  @Column()
  fiveInsurancesOneFundAmount?: string

  // 起征点
  @Column()
  taxThreshold?: string

  // 工作日补贴
  @Column()
  subsidy?: string
}

export default [Bill, AdditionalBill, Reimbursement, Installment, Automatic, Loan, Salary]
