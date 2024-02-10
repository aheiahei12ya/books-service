import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { LedgerSetting } from '@/entity/Setting'

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
