import { DataSource } from 'typeorm'

import FiveInsurancesOneFund from '@/entity/5Insurances1Fund'
import Account from '@/entity/Account'
import BasicSort from '@/entity/BasicSort'
import Bill from '@/entity/Bill'
import Group from '@/entity/Group'
import Ledger from '@/entity/Ledger'
import Setting from '@/entity/Setting'
import Shortcut from '@/entity/Shortcut'
import MonthlyStatistic from '@/entity/Statistic'
import User from '@/entity/User'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'books.db',
  synchronize: true,
  logging: true,
  entities: [
    ...Account,
    ...User,
    ...Group,
    ...Ledger,
    ...BasicSort,
    ...Bill,
    ...Shortcut,
    ...Setting,
    ...MonthlyStatistic,
    ...FiveInsurancesOneFund
  ],
  subscribers: [],
  migrations: []
})

export { AppDataSource }
