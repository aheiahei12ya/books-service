import { DataSource } from 'typeorm'

import Account from '@/entity/Account'
import BasicSort from '@/entity/BasicSort'
import Bill from '@/entity/Bill'
import Group from '@/entity/Group'
import Ledger from '@/entity/Ledger'
import User from '@/entity/User'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'books.db',
  synchronize: true,
  logging: true,
  entities: [...Account, ...User, ...Group, ...Ledger, ...BasicSort, ...Bill],
  subscribers: [],
  migrations: []
})

export { AppDataSource }
