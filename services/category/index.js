const categoryList = (req, res) => {
  res.send({
    "success": true,
    "data": '类别列表',
  })
}

module.exports = {
  categoryList
}
