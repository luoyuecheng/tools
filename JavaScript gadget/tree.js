/**
 * @file Generate tree structure data from arrays, etc. 生成树状结构数据。
 * @author luoyuecheng
 */

/**
 * 以 / 分割的字符串组成的列表，生成树状数据，其子元素置于当前级 children 字段中。
 *  eg. input: ['a/b/c', 'a/b/d', 'a/e', 'b/c', 'g/f/h']
 *      output: [{ "name": "a", "children": [{ "name": "b", "children": [{ "name": "c" }, { "name": "d" }] }, { "name": "e" }] }, { "name": "b", "children": [{ "name": "c" }] }, { "name": "g", "children": [{ "name": "f", "children": [{ "name": "h" }] }] }]
 * @param {String[]} list
 * @returns {Object[]}
 */
function tree(list) {
    const result = [];

    for (let value of list) {
        // 排除空字符串的情况
        if (!value) {
            continue;
        }

        const values = value.split('/');

        // 查找树结构的当前级别是否已经存在，不存在则创建对象，并添加入列表。
        let current = result.find(item => item.name === values[0]);

        if (current === void 0) {
            current = {};
            result.push(current);
        }

        for (let i = 0, length = values.length; i < length; i++) {
            current.name = values[i];

            if (i < length - 1) {
                // 如果还有下一级内容，判断当前是否有 children，没有则构建.
                if (current.children === void 0) {
                    current.children = [];
                }

                // 查找下一级对象，为下一遍遍历构建对象
                let nextCurrent = current.children.find(item => item.name === values[i + 1]);

                if (nextCurrent === void 0) {
                    nextCurrent = {};
                    current.children.push(nextCurrent);
                }

                current = nextCurrent;
            }
        }
    }

    return result;
}