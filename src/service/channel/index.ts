import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Channel } from '@/entity/BasicSort'
import { checkCategoryExistsById } from '@/service/category/utils'
import { getChannelById } from '@/service/channel/utils'
import { createUUIDWithUID } from '@/util'

export const channelList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Channel)

  return await repository.findBy({
    categoryId: req.body.categoryId
  })
}

export const channelCreate = async (req: Request, res: Response) => {
  await checkCategoryExistsById(req.body.categoryId)

  const repository = AppDataSource.getRepository(Channel)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const channel = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    categoryId: req.body.categoryId
  })

  await repository.save(channel)

  return {
    id: channel.id
  }
}

export const channelDetail = async (req: Request, res: Response) => {
  const { channelObj } = await getChannelById(req)
  return channelObj
}

export const channelModify = async (req: Request, res: Response) => {
  const { channelObj, channelRepository } = await getChannelById(req)
  const newChannel = channelRepository.merge(channelObj, req.body)
  await channelRepository.save(newChannel)
  return {
    message: '渠道信息修改成功'
  }
}

export const channelRemove = async (req: Request, res: Response) => {
  const { channelObj, channelRepository } = await getChannelById(req)
  await channelRepository.remove(channelObj)
  return {
    message: '渠道信息已删除'
  }
}
