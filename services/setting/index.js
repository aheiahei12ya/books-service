const settingList = (req, res) => {
  res.send({
    "success": true,
    "data": '设置列表',
  })
}

module.exports = {
  settingList,
}
