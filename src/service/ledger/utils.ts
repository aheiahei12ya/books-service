import { AppDataSource } from '@/data-source'
import { Ledger } from '@/entity/Ledger'

export const getLedgerById = async (id: string) => {
  const ledgerRepository = AppDataSource.getRepository(Ledger)
  const ledgerObj = await ledgerRepository.findOneBy({
    id
  })
  if (!ledgerObj) {
    throw '账本不存在'
  }
  return { ledgerObj, ledgerRepository }
}
