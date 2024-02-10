import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { MonthlyStatistic } from '@/entity/Statistic'
import { checkLedgerExistsById } from '@/service/ledger/utils'
import { getMonthlyStatisticById } from '@/service/statistic/utils'
import { createUUIDWithUID } from '@/util'

export const monthlyStatisticList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(MonthlyStatistic)

  return await repository.findBy({
    ledgerId: req.body.lid
  })
}

export const monthlyStatisticCreate = async (req: Request, res: Response) => {
  await checkLedgerExistsById(req.body.ledgerId)

  const repository = AppDataSource.getRepository(MonthlyStatistic)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const monthlyStatistic = repository.create({
    id: uuid,

    ledgerId: req.body.lid,
    year: req.body.year,
    month: req.body.month,
    expense: req.body.expense,
    income: req.body.income,
    loan: req.body.loan
  })

  await repository.save(monthlyStatistic)

  return {
    id: monthlyStatistic.id
  }
}

export const monthlyStatisticDetail = async (req: Request, res: Response) => {
  const { monthlyStatisticObj } = await getMonthlyStatisticById(req)
  return monthlyStatisticObj
}

export const monthlyStatisticModify = async (req: Request, res: Response) => {
  const { monthlyStatisticObj, monthlyStatisticRepository } =
    await getMonthlyStatisticById(req)
  const newMonthlyStatistic = monthlyStatisticRepository.merge(
    monthlyStatisticObj,
    req.body
  )
  await monthlyStatisticRepository.save(newMonthlyStatistic)
  return {
    message: '月度统计信息修改成功'
  }
}

export const monthlyStatisticRemove = async (req: Request, res: Response) => {
  const { monthlyStatisticObj, monthlyStatisticRepository } =
    await getMonthlyStatisticById(req)
  await monthlyStatisticRepository.remove(monthlyStatisticObj)
  return {
    message: '月度统计信息已删除'
  }
}
