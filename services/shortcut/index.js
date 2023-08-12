const shortcutList = (req, res) => {
  res.send({
    "success": true,
    "data": {
      "shortcutList": [
        {
          "id": 3,
          "name": "滕州电费",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 9,
            "name": "住房开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 39,
            "name": "电费",
            "key": "daily"
          },
          "note": "滕州电费"
        },
        {
          "id": 6,
          "name": "水果",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "huabei"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "offline"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 14,
            "name": "水果",
            "key": "fruit"
          },
          "note": "水果-日常"
        },
        {
          "id": 4,
          "name": "淘宝",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "huabei"
          },
          "platform": {
            "id": 1,
            "name": "淘宝天猫",
            "key": "taobao"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 12,
            "name": "线上",
            "key": "online"
          },
          "note": ""
        },
        {
          "id": 5,
          "name": "午饭",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "huabei"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "offline"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 16,
            "name": "外卖",
            "key": "daily"
          },
          "note": "午饭"
        },
        {
          "id": 7,
          "name": "晚饭",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 16,
            "name": "外卖",
            "key": "daily"
          },
          "note": "晚饭"
        },
        {
          "id": 8,
          "name": "房租",
          "account": {
            "id": 2,
            "name": "余额",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 9,
            "name": "住房开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 37,
            "name": "房租",
            "key": "daily"
          },
          "note": "房租"
        },
        {
          "id": 2,
          "name": "优鲜",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 13,
            "name": "超市",
            "key": "daily"
          },
          "note": "每日优鲜"
        },
        {
          "id": 1,
          "name": "盒马",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 13,
            "name": "超市",
            "key": "daily"
          },
          "note": "盒马鲜生"
        },
        {
          "id": 9,
          "name": "半日达",
          "account": {
            "id": 5,
            "name": "花呗",
            "key": "daily"
          },
          "platform": {
            "id": 5,
            "name": "线下",
            "key": "daily"
          },
          "category": {
            "id": 3,
            "name": "日常开销",
            "key": "daily"
          },
          "subcategory": {
            "id": 13,
            "name": "超市",
            "key": "daily"
          },
          "note": "天猫超市半日达"
        }
      ]
    }
  })
}

module.exports = {
  shortcutList,
}
