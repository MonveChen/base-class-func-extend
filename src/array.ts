/*
 * @Author: Monve
 * @Date: 2022-02-28 15:41:10
 * @LastEditors: Monve
 * @LastEditTime: 2022-06-14 14:29:42
 * @FilePath: /base-class-func-extend/src/array.ts
 */

declare interface Array<T> {
  remove(...item: T[]): void
  deduplicatePush(...item: T[]): void
  deduplicateConcat(...items: T[][]): T[]
  includeArr(...items: T[][]): boolean
  isSameTo(...items: T[][]): boolean
  splitArrByNum(num: number): T[][]
}

Array.prototype.remove = function <T>(...item: T[]): void {
  item.forEach((obj) => {
    const idx = this.indexOf(obj)
    if (idx != -1) {
      this.splice(idx, 1)
    }
  })
}

Array.prototype.deduplicatePush = function <T>(...item: T[]): void {
  this.remove(...item)
  this.push(...item)
}

Array.prototype.deduplicateConcat = function <T>(...items: T[][]): T[] {
  items.forEach((item) => {
    this.deduplicatePush(...item)
  })
  return this
}

Array.prototype.includeArr = function <T>(...items: T[][]): boolean {
  return items.every(item =>
    item.every(val => this.includes(val))
  )
}

Array.prototype.isSameTo = function <T>(...items: T[][]): boolean {
  return items.every(item =>
    this.includeArr(item) && item.includeArr(this)
  )
}

Array.prototype.splitArrByNum = function <T>(num: number): T[][] {
  let start = 0
  let data = []
  for (let i = 0; i < this.length; i++) {
    if (i % num == 0 && i != 0) {
      data.push(this.slice(start, i))
      start = i
    }
    if ((i + 1) === this.length) {
      data.push(this.slice(start))
    }
  }
  return data
}