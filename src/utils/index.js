import { isString, isArray, isObject } from './is'

export function concatArray(list1, list2, append) {
    if(append) return list1.concat(list2)
    return list2.concat(list2)
}

export function transformArray(val, split=",") {
    if(isString(val)) val = val.split(split);
    if(isArray(val)) return val;
}

export function MyJSONParse(str) {
    if (typeof str == 'string') {
        try {
            const obj = JSON.parse(str);
            if (obj && isObject(obj)) return obj;
            if (obj && isArray(obj)) return obj;
            else return str;
        } catch (e) {
            return str;
        }
    }
}

export function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]); // decodeURI(r[2]); 解决参数是中文时的乱码问题

    return null;
}

export function checkIsMobile(cb) {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) cb && cb(true, offsetWid)
    else cb && cb(false, offsetWid)
}

export function getActiveList(list, ids, key) {
    key = key || 'id';
    let li = []
    for(let i in list) {
        if(ids.includes(list[i][key])) {
            li.push(list[i])
        }
    }
    return li
}

