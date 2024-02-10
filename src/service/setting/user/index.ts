import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { UserSetting } from '@/entity/Setting'
import { getUserSettingById } from '@/service/setting/utils'
import { createUUIDWithUID } from '@/util'

export const userSettingList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(UserSetting)

  return await repository.findBy({
    userId: req.cookies.uid
  })
}

export const userSettingCreate = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(UserSetting)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const userSetting = repository.create({
    id: uuid,

    userId: req.cookies.uid,
    incomeLedgerId: req.body.incomeLedgerId,
    expenseLedgerId: req.body.expenseLedgerId,
    mode: req.body.mode,
    automatic: req.body.automatic
  })

  await repository.save(userSetting)

  return {
    id: userSetting.id
  }
}

export const userSettingDetail = async (req: Request, res: Response) => {
  const { userSettingObj } = await getUserSettingById(req)
  return userSettingObj
}

export const userSettingModify = async (req: Request, res: Response) => {
  const { userSettingObj, userSettingRepository } =
    await getUserSettingById(req)
  const newUserSetting = userSettingRepository.merge(userSettingObj, req.body)
  await userSettingRepository.save(newUserSetting)
  return {
    message: '账本设置修改成功'
  }
}

export const userSettingRemove = async (req: Request, res: Response) => {
  const { userSettingObj, userSettingRepository } =
    await getUserSettingById(req)
  await userSettingRepository.remove(userSettingObj)
  return {
    message: '账本设置已删除'
  }
}
