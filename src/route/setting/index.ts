import ledgerSettingRouter from './ledger'
// import userSettingRouter from './user'

export const settingRoutes = [
  // {
  //   path: '/api/setting/user',
  //   child: userSettingRouter
  // },
  {
    path: '/api/setting/ledger',
    child: ledgerSettingRouter
  }
]
