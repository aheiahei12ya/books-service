const accountList = (
  req: any,
  res: { send: (arg0: { success: boolean; data: string }) => void }
) => {
  res.send({
    success: true,
    data: '账户列表'
  })
}

export { accountList }
