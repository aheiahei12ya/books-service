import { Column, Entity } from 'typeorm'

import { AutoRecordBill, ManualRecordBill } from '@/entity/Base'

@Entity()
class Bill extends ManualRecordBill {
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
class AdditionalBill extends ManualRecordBill {
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
class Reimbursement extends ManualRecordBill {
  // 报销金额
  @Column()
  amount?: string

  // 报销状态
  @Column()
  status?: number

  // 报销日期
  @Column('datetime')
  reimbursementTime?: number
}

@Entity()
class Installment extends AutoRecordBill {
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
class Automatic extends AutoRecordBill {
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
class Loan extends AutoRecordBill {
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
class Salary extends AutoRecordBill {
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

export default [
  Bill,
  AdditionalBill,
  Reimbursement,
  Installment,
  Automatic,
  Loan,
  Salary
]
