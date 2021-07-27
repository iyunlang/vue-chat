export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}

export function isString(val) {
  return is(val, 'String')
}

export function isObject(val) {
  return is(val, 'Object')
}

export function isBoolean(val) {
  return is(val, 'Boolean');
}

export const isUrl = (path) => {
  // const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  const reg = /^https?:/;
  return reg.test(path);
};

export const isFunction = (val) => typeof val === 'function';

export function isNumber(val) {
  return is(val, 'Number');
}

export function isArray(val) {
  return val && Array.isArray(val);
}

export function isNull(val) {
  return val === null;
}

export const isDef = (val) => {
  return typeof val !== 'undefined';
};

export const isUnDef = (val) => {
  return !isDef(val);
};

export function isNullAndUnDef(val) {
  return isUnDef(val) && isNull(val);
}

export const isServer = typeof window === 'undefined';

export const isWindow = (val) => {
  return typeof window !== 'undefined' && is(val, 'Window');
};