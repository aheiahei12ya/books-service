const accountList = (req, res) => {
  res.send({
    "success": true,
    "data": '账户列表',
  })
}

module.exports = {
  accountList,
}
