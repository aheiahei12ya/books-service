import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Channel } from '@/entity/BasicSort'

export const getChannelById = async (req: Request) => {
  const channelRepository = AppDataSource.getRepository(Channel)
  const channelObj = await channelRepository.findOneBy({
    id: req.body.id
  })
  if (!channelObj) {
    throw '渠道不存在'
  }
  return { channelObj, channelRepository }
}

export const checkChannelExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Channel)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '渠道不存在'
  }
}
