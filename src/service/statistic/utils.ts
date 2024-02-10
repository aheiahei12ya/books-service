import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { MonthlyStatistic } from '@/entity/Statistic'

export const getMonthlyStatisticById = async (req: Request) => {
  const monthlyStatisticRepository =
    AppDataSource.getRepository(MonthlyStatistic)
  const monthlyStatisticObj = await monthlyStatisticRepository.findOneBy({
    id: req.body.id
  })
  if (!monthlyStatisticObj) {
    throw '月度统计不存在'
  }
  return { monthlyStatisticObj, monthlyStatisticRepository }
}

export const checkMonthlyStatisticExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(MonthlyStatistic)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '月度统计不存在'
  }
}
