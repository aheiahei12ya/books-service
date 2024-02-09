import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Beneficiary } from '@/entity/BasicSort'
import { getBeneficiaryById } from '@/service/beneficiary/utils'
import { checkLedgerExistsById } from '@/service/ledger/utils'
import { createUUIDWithUID } from '@/util'

export const beneficiaryList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Beneficiary)

  return await repository.findBy({
    ledgerId: req.body.lid
  })
}

export const beneficiaryCreate = async (req: Request, res: Response) => {
  await checkLedgerExistsById(req.body.lid)

  const repository = AppDataSource.getRepository(Beneficiary)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const beneficiary = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    ledgerId: req.body.lid,

    relationship: req.body.relationship
  })

  await repository.save(beneficiary)

  return {
    id: beneficiary.id
  }
}

export const beneficiaryDetail = async (req: Request, res: Response) => {
  const { beneficiaryObj } = await getBeneficiaryById(req)
  return beneficiaryObj
}

export const beneficiaryModify = async (req: Request, res: Response) => {
  const { beneficiaryObj, beneficiaryRepository } =
    await getBeneficiaryById(req)
  const newBeneficiary = beneficiaryRepository.merge(beneficiaryObj, req.body)
  await beneficiaryRepository.save(newBeneficiary)
  return {
    message: '受益人信息修改成功'
  }
}

export const beneficiaryRemove = async (req: Request, res: Response) => {
  const { beneficiaryObj, beneficiaryRepository } =
    await getBeneficiaryById(req)
  await beneficiaryRepository.remove(beneficiaryObj)
  return {
    message: '受益人已删除'
  }
}
