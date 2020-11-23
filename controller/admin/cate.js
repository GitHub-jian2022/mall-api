const Service = require('../../service/admin/cate');
// 导入异常类
const { HttpException } = require('../../global/http-exception')

module.exports = {

  async getCate(ctx) {
    const res = await Service.getCate()
    if (res) {
      let data = res;
      ctx.body = { 
        code: 200,
        msg: 'success',
        data,
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  async searchCategories(ctx) {
    const params = ctx.request.query
    const result = await Service.searchCategories(params)
    if (result) {
      const total = result[1][0]['COUNT(1)']
      const data = result[0]
      ctx.body = { 
        code: 200,
        msg: 'success',
        data: {
          data,
          total
        },
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  // 根据层级获取商品分类
  async searchCategoriesByLevel(ctx) {
    const params = ctx.request.query
    const result = await Service.searchCategoriesByLevel(params)
    if (result) {
      const data = result
      ctx.body = { 
        code: 200,
        msg: 'success',
        data: {
          data
        },
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  async addCategories(ctx) {
    const {
      level,
      category_name,
      parentId
    } = ctx.request.body;
    if(!level || !category_name) {
      const error = new HttpException('分类级别和名称必填')
      throw error
    }
    const res = await Service.addCategories(ctx.request.body)
    if (res) {
      ctx.body = { 
        code: 200,
        msg: 'success',
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //删除商品分类
  async deleteCategories(ctx) {
    console.log('deleteCategories: ', ctx.request.body);
    const { ids } = ctx.request.body;
    // 如果这个参数没有传入，那么会报错
    if(!ids) {
      const error = new ParameterException('id未传递', 10001)
      throw error
    }
    const params = {
      ids,
    }
    //判断该商品分类下是否有下级商品，有无法删除
    let Children = await Service.hasChildren(params)
    if(Children.length > 0) {
      ctx.body = { 
        code: 200,
        msg: '有下级分类无法删除'
      }
      return
    }
    const result = await Service.deleteCategories(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '删除成功'
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },
}