const platformList = (req, res) => {
  res.send({
    "success": true,
    "data": '平台列表',
  })
}

module.exports = {
  platformList,
}
