import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Beneficiary } from '@/entity/BasicSort'

export const getBeneficiaryById = async (req: Request) => {
  const beneficiaryRepository = AppDataSource.getRepository(Beneficiary)
  const beneficiaryObj = await beneficiaryRepository.findOneBy({
    id: req.body.id,
    ledgerId: req.body.lid
  })
  if (!beneficiaryObj) {
    throw '受益人不存在'
  }
  return { beneficiaryObj, beneficiaryRepository }
}
