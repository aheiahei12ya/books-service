const categoryList = (req: any, res: { send: (arg0: { success: boolean; data: string }) => void }) => {
  res.send({
    success: true,
    data: '类别列表'
  })
}

export { categoryList }
