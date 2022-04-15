/*
 * @Author: Monve
 * @Date: 2022-04-14 19:06:34
 * @LastEditors: Monve
 * @LastEditTime: 2022-04-15 14:30:14
 * @FilePath: /base-class-func-extend/src/Functions/UrlFunc.ts
 */
export const UrlFunc = {
  /**
   * @param url e.g. https://****?ie=utf-8&f=8&rsv_bp=1 or ***?ie=utf-8&f=8&rsv_bp=1
   * @param options default { parseNumbers: false, parseBooleans: false }
   * @returns e.g. {ie:'utf-8',rsv_bp:'1'} if parseNumbers is true, will be {ie:'utf-8',rsv_bp:1}
   */
  getParams(url: string, options = { parseNumbers: false, parseBooleans: false }) {
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