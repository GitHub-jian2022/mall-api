define({ "api": [
  {
    "type": "POST",
    "url": "/cart",
    "title": "加入购物车",
    "description": "<p>加入购物车</p>",
    "name": "addCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "quanity",
            "description": "<p>商品数量(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /cart\n{\n   goodsId: '15',\n   quanity: '1',\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/frontend/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/cart"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/cart",
    "title": "移出购物车",
    "description": "<p>移出购物车</p>",
    "name": "deleteCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>购物车id集合(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /cart\n{\n   ids: ['3'],\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"操作成功\"\n  \"data\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/cart"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/cart",
    "title": "获取购物车数据",
    "description": "<p>获取购物车商品列表数据</p>",
    "name": "getCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>页数(选填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /cart",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "quanity",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsName",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsIntro",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsCoverImg",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>商品所属分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          id: '1',\n          goodsId: '15',\n          userId: '1',\n          quanity: '3',\n          goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',\n          goodsIntro: 'xxxxxxx',\n          goodsCoverImg: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',\n          price: '1000',\n          tag: '非凡',\n          type: '3',\n          categoryId: 15\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/cart"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/cart/count",
    "title": "获取用户购物车商品总数",
    "description": "<p>获取用户购物车商品总数</p>",
    "name": "getCount",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /cart/incart",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          count: 0\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/cart/count"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/categories",
    "title": "商品分类",
    "description": "<p>商品分类接口</p>",
    "name": "categories",
    "group": "Categories",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /categories",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>商品分类层级</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>商品分类名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "children",
            "description": "<p>下级商品集合</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>下级商品集合数量</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/frontend/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/categories"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/goods/detail",
    "title": "商品详情",
    "description": "<p>根据商品id获取商品信息</p>",
    "name": "getGoodsById",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /goods/detail/15",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsName",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsIntro",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsCoverImg",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>标签</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>商品所属分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          goodsId: '15',\n          goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',\n          goodsIntro: 'xxxxxxx',\n          goodsCoverImg: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',\n          price: '1000',\n          tag: '非凡',\n          type: '3',\n          categoryId: 15\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/goods/detail"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/goods/search",
    "title": "搜索商品",
    "description": "<p>根据商品分类id获取商品信息</p>",
    "name": "searchGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "categoryId",
            "description": "<p>商品分类id(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>页码(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>页数(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>价格排序(选填,1:升序,0:降序)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /goods/search\n{\n   categoryId: '1',\n   keyword: 'iphone',\n   page: '1',\n   size: '10',\n   sort: '1',\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Goods",
            "description": "<p>information</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/frontend/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/goods/search"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/index-infos",
    "title": "首页api",
    "description": "<p>首页数据接口</p>",
    "name": "index-infos",
    "group": "Index",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /index-infos",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "carousels",
            "description": "<p>轮播图</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "newGoodses",
            "description": "<p>新品</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "hotGoodses",
            "description": "<p>热门商品</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "recommendGoodses",
            "description": "<p>推荐商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        carousels: [],\n        newGoodses: [],\n        hotGoodses: [],\n        recommendGoodses: [],\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/home.js",
    "groupTitle": "Index",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/index-infos"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/order",
    "title": "创建订单",
    "description": "<p>创建订单</p>",
    "name": "addOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "goodsList",
            "description": "<p>商品集合(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address_name",
            "description": "<p>收货地址(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>总价(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /order\n{\n   goodsList: [\n     {\n       goodsId: '15',\n       quanity: '1',\n     }\n   ],\n   address_name: '广东省xxx',\n   phone: '10086',\n   price: 5000,\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/frontend/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/order"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/order",
    "title": "删除订单",
    "description": "<p>删除订单</p>",
    "name": "deleteOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>订单id集合(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /order\n{\n   ids: ['3'],\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"操作成功\"\n  \"data\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/order"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/order",
    "title": "获取购物车数据",
    "description": "<p>获取购物车商品列表数据</p>",
    "name": "getOrder",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /order",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address_name",
            "description": "<p>收货地址</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "quanity",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsName",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsIntro",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "goodsCoverImg",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>商品所属分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          orderId: '1',\n          goodsId: '15',\n          userId: '1',\n          addressName: 'xxxxxx',\n          quanity: '3',\n          status: '0',\n          price: '1000',\n          goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',\n          goodsIntro: 'xxxxxxx',\n          goodsCoverImg: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',\n          tag: '非凡',\n          type: '3',\n          categoryId: 15\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/order"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/address",
    "title": "添加收货地址",
    "description": "<p>添加收货地址接口</p>",
    "name": "addAddress",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "defaultFlag",
            "description": "<p>是否默认收货地址(必填,1是)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cityName",
            "description": "<p>城市(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>详细地址(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provinceName",
            "description": "<p>省(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "regionName",
            "description": "<p>区(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPhone",
            "description": "<p>用户手机号(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /address\n{\n   defaultFlag: '1',\n   cityName: '广州市',\n   detailAddress: 'xxxxx',\n   provinceName: '广东省',\n   regionName: '天河区',\n   userName: '张三',\n   userPhone: '15602940000',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/address"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/collection",
    "title": "添加收藏",
    "description": "<p>添加收藏接口</p>",
    "name": "addCollection",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品id(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /collection\n{\n   goodsId: '15',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/collection"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/address",
    "title": "删除收货地址",
    "description": "<p>删除收货地址</p>",
    "name": "deleteAddress",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>收货地址id(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /cart\n{\n   ids: '1',\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"操作成功\"\n  \"data\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/address"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/collection",
    "title": "根据收藏id删除收藏",
    "description": "<p>删除收藏</p>",
    "name": "deleteCollection",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>收藏id(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /collection\n{\n   ids: [1],\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"操作成功\"\n  \"data\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/collection"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/collection/goodsId",
    "title": "根据商品id删除收藏",
    "description": "<p>删除收藏</p>",
    "name": "deleteCollectionByGoodsId",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>商品id(必填)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段 token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /collection/goodsId\n{\n   ids: [1],\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"操作成功\"\n  \"data\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/collection/goodsId"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/address/id",
    "title": "获取收货地址详情",
    "description": "<p>获取收货地址接口</p>",
    "name": "getAddress",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /address/4",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/address/id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/address",
    "title": "获取收货地址列表",
    "description": "<p>获取收货地址列表接口</p>",
    "name": "getAddress",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /address",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/address"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/collection",
    "title": "获取收藏",
    "description": "<p>获取收藏接口</p>",
    "name": "getCollection",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /collection",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/collection"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/collection/count/goodsId",
    "title": "商品是否已收藏",
    "description": "<p>商品是否已收藏,</p>",
    "name": "getCollectionCountByGoodsId",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /collection/count/:goodsId",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>商品是否已收藏返回,count: 0则未收藏</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          count: 0\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/collection/count/goodsId"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "获取用户信息",
    "description": "<p>获取用户信息接口</p>",
    "name": "getUserInfo",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /user",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>标签</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          id: '1',\n          phone: '15',\n          username: '张三',\n          password: '123456',\n          nickname: '张三',\n          avatar: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',\n          gender: '1',\n          sign: '程序猿'\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/user"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "登录",
    "description": "<p>用户登录接口</p>",
    "name": "login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /login\n{\n   phone: '15602941146',\n   password: '123456'\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>information.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/register",
    "title": "注册",
    "description": "<p>注册接口</p>",
    "name": "register",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /register\n{\n   phone: '15602941146',\n   password: '123456'\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/register"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user",
    "title": "修改用户信息",
    "description": "<p>修改用户信息接口</p>",
    "name": "updateUserInfo",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求头必须携带字段token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sign",
            "description": "<p>个性签名(选填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /user\n{\n   phone: '15602941146',\n   username: '123456',\n   nickname: '15602941146',\n   password: '123456',\n   sign: 'hello',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/frontend/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8090/api/user"
      }
    ]
  }
] });
