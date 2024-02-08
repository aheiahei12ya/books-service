import { BaseResponse } from '@/types/service'

export type AccountType = {
  id: number
  name: string
}

export type AccountListResponse = BaseResponse<AccountType[]>
