import { Request, Response } from 'express'
import { uuidv7 } from 'uuidv7'

import { AppDataSource } from '@/data-source'
import { User } from '@/entity/User'
import { getUserById } from '@/service/user/utils'

export const userLogin = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User)

  const userObj = await userRepository.findOneBy({
    account: req.body.account
  })

  if (!userObj) {
    throw '用户不存在'
  }

  if (
    userObj.account === req.body.account &&
    userObj.password === req.body.password
  ) {
    return {
      nickname: userObj.nickname,
      avatar: userObj.avatar,
      uid: userObj.id
    }
  } else {
    throw '用户名或密码错误'
  }
}

export const userCreate = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User)

  const userExist = await userRepository.existsBy({ account: req.body.account })

  if (userExist) {
    throw '账号已被注册'
  }

  let uuid = uuidv7()
  while (await userRepository.existsBy({ id: uuid })) {
    uuid = uuidv7()
  }

  const user = userRepository.create({
    id: uuid,
    nickname: req.body.nickname,
    password: req.body.password,
    avatar: req.body.avatar,
    account: req.body.account
  })

  await userRepository.save(user)

  return {
    id: user.id
  }
}

export const userInfo = async (req: Request, res: Response) => {
  const { userObj } = await getUserById(req)
  return userObj
}

export const userModify = async (req: Request, res: Response) => {
  const { userObj, userRepository } = await getUserById(req)
  const newUser = userRepository.merge(userObj, req.body)
  await userRepository.save(newUser)
  return {
    message: '用户信息修改成功'
  }
}

export const userRemove = async (req: Request, res: Response) => {
  const { userObj, userRepository } = await getUserById(req)
  await userRepository.remove(userObj)
  return {
    message: '用户已删除'
  }
}
