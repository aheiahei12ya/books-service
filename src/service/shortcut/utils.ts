import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Shortcut } from '@/entity/Shortcut'

export const getShortcutById = async (req: Request) => {
  const shortcutRepository = AppDataSource.getRepository(Shortcut)
  const shortcutObj = await shortcutRepository.findOneBy({
    id: req.body.id
  })
  if (!shortcutObj) {
    throw '捷径不存在'
  }
  return { shortcutObj, shortcutRepository }
}

export const checkShortcutExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Shortcut)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '捷径不存在'
  }
}
