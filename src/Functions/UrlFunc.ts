/*
 * @Author: Monve
 * @Date: 2022-04-14 19:06:34
 * @LastEditors: Monve
 * @LastEditTime: 2022-04-15 11:10:07
 * @FilePath: /base-class-fuction-extend/src/Functions/urlFunc.ts
 */
class UrlFunc {
  static getParams(url: string, options = { parseNumbers: false, parseBooleans: false }) {
    let dic: { [key: string]: string | number | boolean } = {}
    const params_strs = url.replace(/^.*\?/g, '').split('&')
    params_strs.forEach((str) => {
      const split = str.split('=')
      if (split.length > 1) {
        let value: string | number | boolean = split[1]
        if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
          value = Number(value);
        } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
          value = value.toLowerCase() === 'true';
        }
        dic[split[0]] = split[1]
      }
    })
    return dic
  }
}