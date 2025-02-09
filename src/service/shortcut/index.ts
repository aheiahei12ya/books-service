import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Shortcut } from '@/entity/Shortcut'
import { checkLedgerExistsById } from '@/service/ledger/utils'
import { getShortcutById } from '@/service/shortcut/utils'
import { createUUIDWithUID } from '@/util'

export const shortcutList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Shortcut)

  return await repository.findBy({
    userId: req.cookies.uid,
    ledgerId: req.body.lid
  })
}

export const shortcutCreate = async (req: Request, res: Response) => {
  await checkLedgerExistsById(req.body.ledgerId)

  const repository = AppDataSource.getRepository(Shortcut)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const shortcut = repository.create({
    id: uuid,

    userId: req.cookies.uid,
    ledgerId: req.body.lid,
    categoryId: req.body.categoryId,
    accountId: req.body.accountId,
    methodId: req.body.methodId,
    sortId: req.body.sortId,
  })

  await repository.save(shortcut)

  return {
    id: shortcut.id
  }
}

export const shortcutDetail = async (req: Request, res: Response) => {
  const { shortcutObj } = await getShortcutById(req)
  return shortcutObj
}

export const shortcutModify = async (req: Request, res: Response) => {
  const { shortcutObj, shortcutRepository } = await getShortcutById(req)
  const newShortcut = shortcutRepository.merge(shortcutObj, req.body)
  await shortcutRepository.save(newShortcut)
  return {
    message: '渠道信息修改成功'
  }
}

export const shortcutRemove = async (req: Request, res: Response) => {
  const { shortcutObj, shortcutRepository } = await getShortcutById(req)
  await shortcutRepository.remove(shortcutObj)
  return {
    message: '渠道信息已删除'
  }
}
