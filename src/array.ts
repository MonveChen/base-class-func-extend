/*
 * @Author: Monve
 * @Date: 2022-02-28 15:41:10
 * @LastEditors: Monve
 * @LastEditTime: 2022-03-04 14:37:31
 * @FilePath: /base-class-fuction-extend/src/array.ts
 */

declare interface Array<T> {
  remove(...item: T[]): void
  deduplicatePush(...item: T[]): void
  includeArr(arr: T[]): boolean
}

Array.prototype.remove = function <T>(...item: T[]): void {
  item.forEach((obj: T) => {
    const idx = this.indexOf(obj)
    if (idx != -1) {
      this.slice(idx, idx + 1)
    }
  })
}

Array.prototype.deduplicatePush = function <T>(...item: T[]): void {
  this.remove(item)
  this.push(item)
}

Array.prototype.includeArr = function <T>(arr: T[]): boolean {
  return this.every(val => arr.includes(val))
}