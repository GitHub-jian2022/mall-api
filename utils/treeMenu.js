function treeMenu(arr,callback) {
    var list = []
    arr.forEach(item => {
        if (!item.parentId) {
            //不存在父级,即首层数据
            item.children = getChildren(arr, item.id)
            item.total = item.children.length
            list.push(item)
        }
    });
    callback(list) 
}
// arr是原始数组,id是父级id
function getChildren(arr, id) {
    let children = arr.filter(son => son.parentId === id)
    if (children.length > 0) {
        children.forEach(item => {
            if (item.parentId) {
                //存在父级
                item.children = getChildren(arr, item.id)
                item.total = item.children.length
            }
        })
    }
    return children
}

module.exports = {
    treeMenu,
    getChildren
}