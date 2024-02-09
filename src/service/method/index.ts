const methodList = (
  req: any,
  res: { send: (arg0: { success: boolean; data: string }) => void }
) => {
  res.send({
    success: true,
    data: '支出方式列表'
  })
}

export { methodList }
