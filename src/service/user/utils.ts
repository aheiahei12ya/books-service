import { accountError } from '@/constant'
import { AppDataSource } from '@/data-source'
import { User } from '@/entity/User'

export const getUserById = async (uid: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const userObj = await userRepository.findOneBy({
    id: uid
  })
  if (!userObj) {
    throw accountError
  }
  return { userObj, userRepository }
}
