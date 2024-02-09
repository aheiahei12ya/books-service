import { BaseResponse } from '@/type/service'

export type AccountType = {
  id: number
  name: string
}

export type AccountListResponse = BaseResponse<AccountType[]>
