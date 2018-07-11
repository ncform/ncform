/**
 * 事件中心
 */
class EventHub {
  constructor() {
    // 事件池
    this.event = {};
  }

  /**
   * 监听事件
   * @param {String} eventName 事件名称
   * @param {Function} func 事件函数
   */
  on(eventName, func) {
    if (this.event[eventName]) {
      this.event[eventName].push(func);
    } else {
      this.event[eventName] = [func];
    }
  }

  /**
   * 解绑事件
   * @param {String} eventName 事件名称
   */
  off(eventName) {
    this.event[eventName] = [];
  }

  /**
   * 发送事件
   * @param {String} eventName 事件名称
   * @param {Boolean} off 触发事件后是否解绑
   */
  emit(eventName, off) {
    if (!this.event[eventName]) return;

    this.event[eventName].forEach(item => {
      item();
    });

    if (off) {
      this.off(eventName);
    }
  }
}

export default new EventHub();
