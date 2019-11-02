function compare(property) {
    return function (a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
    }
}

// 格式化时间
function dateFtt(fmt, value) {
    let date = new Date(value);
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}

// 判断数组
function isArrayFn(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

// 递归修改JSON无限级key值
function parseJson(arr, newKey, oldKey) {
    let key = newKey;
    let key2 = oldKey;
    arr = arr.slice();

    function toParse(arr) {
        arr.forEach(function (item) {
            if (item[key2] && Array.isArray(item[key2])) {
                item['title'] = item['bk_inst_name'];
                item[key] = item[key2];
                toParse(item[key])
            } else {
                item['title'] = item['bk_inst_name'];
            }
            delete item[key2]
        });
        return arr
    }

    return toParse(arr)
}

// 数组去重
function removeDuplicatedItem(arr) {
    let o = {};
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let k = arr[i];
        if (!o[k]) {
            o[k] = true;
            new_arr.push(k);
        }
    }
    return new_arr;
}
