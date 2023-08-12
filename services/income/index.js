const incomeInitial = (req, res) => {
  res.send({
    "success": true,
    "data": {
      "accountList": [
        {
          "id": 2,
          "name": "余额",
          "key": "balance"
        },
        {
          "id": 5,
          "name": "花呗",
          "key": ""
        },
        {
          "id": 3,
          "name": "借呗",
          "key": ""
        },
        {
          "id": 6,
          "name": "金条",
          "key": ""
        },
        {
          "id": 7,
          "name": "美团月付",
          "key": ""
        },
        {
          "id": 1,
          "name": "京东白条",
          "key": ""
        },
        {
          "id": 4,
          "name": "招行信用卡",
          "key": ""
        }
      ],
      "categoryList": [
        {
          "id": 3,
          "name": "日常开销",
          "key": "daily",
          "root": 1
        },
        {
          "id": 4,
          "name": "生活开销",
          "key": "life",
          "root": 1
        },
        {
          "id": 5,
          "name": "正常收入",
          "key": "character",
          "root": 1
        },
        {
          "id": 6,
          "name": "败家消费",
          "key": "splurge",
          "root": 1
        },
        {
          "id": 7,
          "name": "虚拟商品",
          "key": "virtual",
          "root": 1
        }
      ],
      "subcategoryList": [
        {
          "id": 5,
          "key": "dinner",
          "name": "工资",
          "root": 1
        },
        {
          "id": 6,
          "key": "drink",
          "name": "饮料",
          "root": 1
        },
        {
          "id": 7,
          "key": "snack",
          "name": "零食",
          "root": 1
        }
      ],
      "preset": {
        "account": {
          "id": 1,
          "key": "balance",
          "name": "余额"
        },
        "category": {
          "id": 4,
          "key": "daily",
          "name": "正常收入",
          "root": 0
        },
        "subcategory": {
          "id": 5,
          "key": "dinner",
          "name": "工资",
          "root": 1
        }
      }
    }
  })
}

module.exports = {
  incomeInitial,
}
