### usage

html

```html
    <button class="plus">plus</button>
    <button class="minus">minus</button>
```

<br>

javascript
```javascript
import { LongPress } from 'long-press'

let count = 0
new LongPress('.plus', () => {
    count++
    console.log('count:', count)
})

new LongPress('.minus', () => {
    count--
    console.log('count:', count)
})
```

<br>

@params

```javascript
/**
 * desc 长按页面事件
 * @param {String} selector 字符串选择器
 * @param {Function} cb 长按事件持续执行回调
 */
new LongPress(selector, cb)
```