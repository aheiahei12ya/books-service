const paymentMethodList = (req, res) => {
  res.send({
    "success": true,
    "data": '支出方式列表',
  })
}

module.exports = {
  paymentMethodList,
}
