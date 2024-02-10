import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { LedgerSetting, UserSetting } from '@/entity/Setting'

export const getLedgerSettingById = async (req: Request) => {
  const ledgerSettingRepository = AppDataSource.getRepository(LedgerSetting)
  const ledgerSettingObj = await ledgerSettingRepository.findOneBy({
    id: req.body.id
  })
  if (!ledgerSettingObj) {
    throw '账本设置不存在'
  }
  return { ledgerSettingObj, ledgerSettingRepository }
}

export const getUserSettingById = async (req: Request) => {
  const userSettingRepository = AppDataSource.getRepository(UserSetting)
  const userSettingObj = await userSettingRepository.findOneBy({
    id: req.body.id
  })
  if (!userSettingObj) {
    throw '用户设置不存在'
  }
  return { userSettingObj, userSettingRepository }
}
