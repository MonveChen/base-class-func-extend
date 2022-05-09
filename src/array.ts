/*
 * @Author: Monve
 * @Date: 2022-02-28 15:41:10
 * @LastEditors: Monve
 * @LastEditTime: 2022-05-09 13:59:10
 * @FilePath: /base-class-func-extend/src/array.ts
 */

declare interface Array<T> {
  remove(...item: T[]): void
  deduplicatePush(...item: T[]): void
  deduplicateConcat(...items: T[][]): T[]
  includeArr(arr: T[]): boolean
}

Array.prototype.remove = function <T>(...item: T[]): void {
  item.forEach((obj) => {
    const idx = this.indexOf(obj)
    if (idx != -1) {
      this.splice(idx, idx + 1)
    }
  })
}

Array.prototype.deduplicatePush = function <T>(...item: T[]): void {
  this.remove(item)
  this.push(item)
}

Array.prototype.deduplicateConcat = function <T>(...items: T[][]): T[] {
  items.forEach((item) => {
    this.deduplicatePush(...item)
  })
  return this
}

Array.prototype.includeArr = function <T>(arr: T[]): boolean {
  return arr.every(val => this.includes(val))
}