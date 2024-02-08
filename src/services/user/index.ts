import { Request, Response } from 'express'
import { uuidv7 } from 'uuidv7'

import { AppDataSource } from '@/data-source'
import { User } from '@/entity/User'
import { UserInfoType } from '@/services/user/types'

const userLogin = async (req: Request, res: Response) => {
  return {
    nickName: '12ya',
    avatar: 'http://aheiahei.imdo.co:8081/repository/blob/avatar/avatar.png',
    userInfo: {
      id: '1'
    }
  }
}

const userInfo = async (req: Request, res: Response): Promise<UserInfoType> => {
  return {
    nickName: '12ya',
    userInfo: {
      id: '1'
    }
  }
}

const userCreate = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User)
  let uuid = uuidv7()
  while (await userRepository.existsBy({ id: uuid })) {
    uuid = uuidv7()
  }
  const user = userRepository.create({
    id: uuid,
    nickname: req.body.nickname,
    password: req.body.password,
    avatar: req.body.avatar
  })
  return {
    userId: user.id
  }
}

const userModify = async (req: Request, res: Response) => {}

const userRemove = async (req: Request, res: Response) => {}

export { userCreate, userInfo, userLogin, userModify, userRemove }
