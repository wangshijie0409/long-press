/**
 * desc 长按页面事件
 * @param {String} selector 字符串选择器
 * @param {Function} cb 长按事件持续执行回调
 */
export class LongPress {
    constructor(selector, cb) {
        this.LONG_PRESS_START_TIME = 600
        this.LONG_PRESS_INTERVAL = 200
        this.longPressTimer = null
        this.isLongPress = false

        let ele = document.querySelector(selector)
        ele.addEventListener('touchstart', () => {
            this.onTouchStart(cb)
        })
        ele.addEventListener('touchend', this.onTouchEnd.bind(this))
        ele.addEventListener('touchcancel', this.onTouchEnd.bind(this))
    }
    // 开始点击
    onTouchStart(cb) {
        clearTimeout(this.longPressTimer)
        this.isLongPress = false
        this.longPressTimer = setTimeout(() => {
            this.isLongPress = true
            cb && cb()
            this.longPressStep(cb)
        }, this.LONG_PRESS_START_TIME)
    }

    // 点击结束
    onTouchEnd(event) {
        clearTimeout(this.longPressTimer)
        if (this.isLongPress) {
            this.preventDefault(event)
        }
    }

    // 长按持续调用
    longPressStep(cb) {
        this.longPressTimer = setTimeout(() => {
            cb && cb()
            this.longPressStep(cb)
        }, this.LONG_PRESS_INTERVAL)
    }

    // 阻止默认事件
    preventDefault(event, isStopPropagation) {
        if (typeof event.cancelable !== 'boolean' || event.cancelable) {
            event.preventDefault()
        }

        if (isStopPropagation) {
            this.stopPropagation(event)
        }
    }
    // 阻止冒泡
    stopPropagation(event) {
        event.stopPropagation()
    }
}
