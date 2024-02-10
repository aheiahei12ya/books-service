export enum LEDGER_STATUS {
  REMOVED = -1,
  DISABLED = 0,
  ACTIVATED = 1
}

export enum ACCOUNT_TYPE {
  DEPOSIT = 1,
  CREDIT = 2
}

export enum ACCOUNT_STATUS {
  REMOVED = -1,
  DISABLED = 0,
  ACTIVATED = 1,
  PENDING_BILLING = 2, // 待出账
  PENDING_REPAYMENT = 3, // 待还款
  NO_REPAYMENT = 4, // 无需还款
  REPAID = 5, // 已还款
  OVERDUE = 6 // 已逾期
}

export enum GROUP_PERMISSION {
  READONLY = 0,
  NORMAL = 1,
  ADMIN = 2
}

export enum RECORD_MODE {
  NORMAL = 0,
  PREDICT = 1
}

export const UNIQUE_TOKEN = '018d8c7c-134c-7c37-968c-c5e02bbfd248'
