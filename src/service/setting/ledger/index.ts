import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { LedgerSetting } from '@/entity/Setting'
import { checkLedgerExistsById } from '@/service/ledger/utils'
import { getLedgerSettingById } from '@/service/setting/utils'
import { createUUIDWithUID } from '@/util'

export const ledgerSettingList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(LedgerSetting)

  return await repository.findBy({
    userId: req.cookies.uid,
    ledgerId: req.body.lid
  })
}

export const ledgerSettingCreate = async (req: Request, res: Response) => {
  await checkLedgerExistsById(req.body.ledgerId)

  const repository = AppDataSource.getRepository(LedgerSetting)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const ledgerSetting = repository.create({
    id: uuid,

    userId: req.cookies.uid,
    ledgerId: req.body.lid,
    categoryId: req.body.categoryId,
    accountId: req.body.accountId,
    methodId: req.body.methodId,
    sortId: req.body.sortId
  })

  await repository.save(ledgerSetting)

  return {
    id: ledgerSetting.id
  }
}

export const ledgerSettingDetail = async (req: Request, res: Response) => {
  const { ledgerSettingObj } = await getLedgerSettingById(req)
  return ledgerSettingObj
}

export const ledgerSettingModify = async (req: Request, res: Response) => {
  const { ledgerSettingObj, ledgerSettingRepository } =
    await getLedgerSettingById(req)
  const newLedgerSetting = ledgerSettingRepository.merge(
    ledgerSettingObj,
    req.body
  )
  await ledgerSettingRepository.save(newLedgerSetting)
  return {
    message: '账本设置修改成功'
  }
}

export const ledgerSettingRemove = async (req: Request, res: Response) => {
  const { ledgerSettingObj, ledgerSettingRepository } =
    await getLedgerSettingById(req)
  await ledgerSettingRepository.remove(ledgerSettingObj)
  return {
    message: '账本设置已删除'
  }
}
