# base-class-func-extend

A base class commonly used function extension plugin

#### Usage

```js
import "base-class-func-extend" //import it first

const a = ['a','b']

a.remove('a')

a.remove('a','b')	//移除 a、b   []

a.deduplicatePush('a')  //去重式push.  ['a','a']

a.includeArr(['b','c'])    //是否包含数组.  false

a.isSameTo(['b','a'])    //是否相同(与排序无关).  true

Object.reverseKeyValue({'a':1})   //key、value反转   {1:'a'}

#javascript
require("base-class-func-extend")

```
