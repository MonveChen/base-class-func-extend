/*
 * @Author: Monve
 * @Date: 2022-03-10 14:42:14
 * @LastEditors: Monve
 * @LastEditTime: 2022-12-13 14:09:18
 * @FilePath: /base-class-func-extend/src/object.ts
 */

declare interface ObjectConstructor {
  reverseKeyValue(o: Object): any
}

/**
 * get reverse key value object,
 * like {a:b}->{b:a},other can not be ensure availability.
 * Use with caution
 */
Object.reverseKeyValue = function (o: Object): any {
  let temp: { [key: string | number]: string | number } = {}
  Object.keys(o).map((key) => {
    temp[(o as any)[key]] = key
  })
  return temp
}

declare interface ObjectConstructor {
  removeKeyWithValue(o: Object, ...values: any[]): void
}

/**
 * remove key with specified value
 * like {a:b}->{b:a},other can not be ensure availability.
 * Use with caution
 */
Object.removeKeyWithValue = function (targe: Object, ...values: any[]): void {
  Object.keys(targe).map((key) => {
    if (values.includes((targe as any)[key])) {
      delete (targe as any)[key]
    }
  })
}
