/**
 * @file 将数组进行排列组合生成新的数组。
 * @author luoyuecheng
 */


/**
 * 从每组中取一个数，组成一组不重复的数据，如果当前项没有值，则取空字符串。
 *  eg. input: [[1, 2, 3], [4, 5, 6], [7]]
 *      output: [
 *          { '0': 1, '1': 4, '2': '' },
 *          { '0': 1, '1': 5, '2': '' },
 *          { '0': 1, '1': 6, '2': '' },
 *          { '0': 2, '1': 4, '2': '' },
 *          { '0': 2, '1': 5, '2': '' },
 *          { '0': 2, '1': 6, '2': '' },
 *          { '0': 3, '1': 4, '2': '' },
 *          { '0': 3, '1': 5, '2': '' },
 *          { '0': 3, '1': 6, '2': '' }
 *     ]
 * @param {Object|Array} input
 * @returns {Array}
 */
function combination(selectValues) {
    const keys = Object.keys(selectValues);
    const result = [];

    if (!keys.length) {
        return result;
    }

    +function loop(index, obj) {
        const keyArray = selectValues[keys[index]];
        if (!keyArray.length) {
            keyArray.push('');
        }
        for (let i = 0, len = keyArray.length; i < len; i++) {
            obj[keys[index]] = keyArray[i];
            if (!selectValues[keys[index + 1]]) {
                result.push({ ...obj });
            } else {
                loop(index + 1, { ...obj });
            }
        }
    }(0, {})
    return result;
}

+function runCode() {
    const info = {
        COM$MTP1: ["MADE IN FRANCE", "MADE IN HONDURAS", "MADE IN U.S.A. OF IMPORTED FABRICS"],
        COM$MTP2: ["VERY DELICATE MACHINE WASH AT 40°C", "WASH INSIDE OUT", "DRY CLEANABLE"],
        COM$MTP3: ["Graham Tiso Limited.", "Sports Unlimited Retail BV.", "Tessuti Limited."]
    }

    let combinationArray = {
        a: [1, 2, 3],
        b: [4, 5, 6],
        c: []
    }

    combinationArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7]
    ]

    console.log(combination(combinationArray))

}()