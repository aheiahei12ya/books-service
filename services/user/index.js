const userLogin = (req, res) => {
  res.send({
    "success": true,
    "data": {
      "nickName": "12ya",
      "avatar": "http://aheiahei.imdo.co:8081/repository/blob/avatar/avatar.png",
      "userInfo": {
        "id": "1"
      }
    }
  })
}

const userInfo = (req, res) => {
  res.send({
    "success": true,
    "data": {
      "nickName": "12ya",
      "userInfo": {
        "id": "1"
      }
    }
  })
}

module.exports = {
  userLogin,
  userInfo
}
