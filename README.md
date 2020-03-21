# tools
Various tool codes

- [JavaScript 树状工具](./JavaScript\ gadget/tree.js)

    - 以 / 分割的字符串组成的列表，生成树状数据，其子元素置于当前级 children 字段中。

    ```
    // list
    const list = ['a/b/c', 'a/b/d', 'a/e', 'b/c', 'g/f/h'];
    // output: 
    const output = [{ "name": "a", "children": [{ "name": "b", "children": [{ "name": "c" }, { "name": "d" }] }, { "name": "e" }] }, { "name": "b", "children": [{ "name": "c" }] }, { "name": "g", "children": [{ "name": "f", "children": [{ "name": "h" }] }] }]
    ```

- [排列组合](./JavaScript\ gadget/combination.js)

    从每组中取一个数，组成一组不重复的数据，如果当前项没有值，则取空字符串。

    ```
    input: [[1, 2, 3], [4, 5, 6], [7]]
    output:
        [
            { '0': 1, '1': 4, '2': 7 },
            { '0': 1, '1': 5, '2': 7 },
            { '0': 1, '1': 6, '2': 7 },
            { '0': 2, '1': 4, '2': 7 },
            { '0': 2, '1': 5, '2': 7 },
            { '0': 2, '1': 6, '2': 7 },
            { '0': 3, '1': 4, '2': 7 },
            { '0': 3, '1': 5, '2': 7 },
            { '0': 3, '1': 6, '2': 7 }
        ]
    
    input: { a: [1, 2, 3], b: [4, 5, 6], c: [] }
    output:
        [
            { a: 1, b: 4, c: '' },
            { a: 1, b: 5, c: '' },
            { a: 1, b: 6, c: '' },
            { a: 2, b: 4, c: '' },
            { a: 2, b: 5, c: '' },
            { a: 2, b: 6, c: '' },
            { a: 3, b: 4, c: '' },
            { a: 3, b: 5, c: '' },
            { a: 3, b: 6, c: '' }
        ]