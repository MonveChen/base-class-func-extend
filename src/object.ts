/*
 * @Author: Monve
 * @Date: 2022-03-10 14:42:14
 * @LastEditors: Monve
 * @LastEditTime: 2022-03-10 15:18:30
 * @FilePath: /base-class-fuction-extend/src/object.ts
 */

declare interface ObjectConstructor {
  reverseKeyValue(o: Object): any
}

/**
 * get reverse key value object,
 * like {a:b}->{b:a},other can not be ensure availability.
 * Use with caution
 */
Object.reverseKeyValue = (o: Object): any => {
  let temp: { [key: string | number]: string | number } = {}
  Object.keys(o).map((key) => {
    temp[(o as any)[key]] = key
  })
  return temp
}
