/*
 * @Author: Monve
 * @Date: 2022-03-10 14:42:14
 * @LastEditors: Monve
 * @LastEditTime: 2022-03-10 14:44:08
 * @FilePath: /base-class-fuction-extend/src/object.ts
 */

declare interface ObjectConstructor {
  reverseKeyValue(o: Object): Object
}

/**
 * get reverse key value object,
 * like {a:b}->{b:a},other can not be ensure availability.
 * Use with caution
 */
Object.reverseKeyValue = function (o: Object): Object {
  let temp: { [key: string | number]: string | number } = {}
  Object.keys(o).map((key) => {
    temp[(o as any)[key]] = key
  })
  return temp
}
