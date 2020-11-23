define({ "api": [
  {
    "type": "POST",
    "url": "/categories",
    "title": "添加商品分类",
    "description": "<p>添加商品分类接口</p>",
    "name": "addCategories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
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
            "field": "level",
            "description": "<p>商品分类级别(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_name",
            "description": "<p>商品分类名称(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parentId",
            "description": "<p>上级商品id(必填，1级商品分类传NULL)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /categories\n{\n   level: '2',\n   category_name: '手机',\n   parentId: '15',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/admin/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/categories"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/categories",
    "title": "删除商品分类",
    "description": "<p>删除商品分类</p>",
    "name": "deleteCategories",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>商品分类id(必填)</p>"
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
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /categories\n{\n   ids: ['1'],\n}",
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
    "filename": "router/admin/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/categories"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/categories",
    "title": "商品分类",
    "description": "<p>商品分类接口</p>",
    "name": "getCategories",
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
    "filename": "router/admin/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/categories"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/categories/level",
    "title": "根据层级获取商品分类",
    "description": "<p>根据层级获取商品分类</p>",
    "name": "levelCategories",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "level",
            "description": "<p>层级(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /categories/level\n{\n   level: '1',\n}",
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
            "field": "Categories",
            "description": "<p>information</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/admin/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/categories/level"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/categories/search",
    "title": "多条件搜索商品分类",
    "description": "<p>多条件搜索商品分类</p>",
    "name": "searchCategories",
    "group": "Categories",
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
            "field": "level",
            "description": "<p>层级(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword",
            "description": "<p>分类名称(选填)</p>"
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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /categories/search\n{\n   categoryId: '1',\n   level: '1',\n   keyword: '手机',\n   page: '1',\n   size: '10',\n}",
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
            "field": "Categories",
            "description": "<p>information</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "router/admin/cate.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/categories/search"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/goods",
    "title": "添加商品",
    "description": "<p>添加商品接口</p>",
    "name": "addGoods",
    "group": "Goods",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
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
            "field": "goodsName",
            "description": "<p>商品名称(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsIntro",
            "description": "<p>商品描述(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsCoverImg",
            "description": "<p>商品封面图片(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sellingPrice",
            "description": "<p>商品价格(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>商品标签(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型(必填，1: 新品, 2: 热门商品, 3: 推荐商品, 4: 其他 )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "categoryId",
            "description": "<p>商品所属分类 (必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "formData",
            "optional": false,
            "field": "formData",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /goods\n{\n   goodsName: '商品名称',\n   goodsIntro: '商品描述',\n   goodsCoverImg: '',\n   sellingPrice: '2000',\n   tag: '商品标签',\n   type: '1',\n   categoryId: '15',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/admin/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/goods"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/goods",
    "title": "删除商品",
    "description": "<p>删除商品</p>",
    "name": "deleteGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>商品分类(必填)</p>"
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
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /goods\n{\n   ids: ['1'],\n}",
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
    "filename": "router/admin/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/goods"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/goods/all",
    "title": "查找全部商品",
    "description": "<p>查找全部商品</p>",
    "name": "getAllGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>页码(选填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>页数(选填)</p>"
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
        "content": "curl -i /goods/search\n{\n   page: '1',\n   size: '10',\n   sort: '1',\n}",
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
    "filename": "router/admin/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/goods/all"
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
    "filename": "router/admin/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/goods/detail"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/goods/search",
    "title": "多条件搜索商品",
    "description": "<p>多条件搜索商品</p>",
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
    "filename": "router/admin/goods.js",
    "groupTitle": "Goods",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/goods/search"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/roles/search",
    "title": "条件查找角色",
    "description": "<p>条件查找角色接口</p>",
    "name": "getAllRoles",
    "group": "Roles",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /roles/search",
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
            "description": "<p>角色id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>角色类型</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type_en",
            "description": "<p>角色类型英文显示</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type_cn",
            "description": "<p>角色类型中文显示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          id: '1',\n          type: '1',\n          type_en: 'admin',\n          type_cn: '管理员',\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/admin/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/roles/search"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/user/search",
    "title": "多条件查找用户",
    "description": "<p>多条件查找用户接口</p>",
    "name": "getUserByKeyWord",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /user/all",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
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
          }
        ]
      }
    },
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":\"200\"\n  \"message\": \"success\"\n  \"data\": [\n        {\n          id: '1',\n          phone: '15',\n          username: '张三',\n          password: '123456',\n          nickname: '张三',\n          avatar: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',\n          gender: '1',\n          sign: '程序猿',\n          type: 1,\n          type_cn: '管理员'\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "router/admin/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/user/search"
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
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
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
    "filename": "router/admin/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/user"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "用户登录",
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
    "filename": "router/admin/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/upload",
    "title": "上传头像",
    "description": "<p>上传头像接口</p>",
    "name": "updateAvatar",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "formData",
            "optional": false,
            "field": "formData",
            "description": "<p>(必填)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i /user\n{\n   formData: file,\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/admin/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/user/upload"
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
            "field": "authorization",
            "description": "<p>请求头必须携带字段authorization</p>"
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
            "description": "<p>手机号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名(必填)</p>"
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
        "content": "curl -i /user\n{\n   phone: '15602941146',\n   username: '123456',\n   password: '123456',\n}",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "filename": "router/admin/user.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://47.100.138.242:8085/admin/user"
      }
    ]
  }
] });
