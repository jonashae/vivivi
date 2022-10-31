let events = {}
events.send = (listener, msg) => {
  window.dispatchEvent(
    new CustomEvent(listener, {
      detail: msg
    })
  )
}

events.receive = (listener, func) => {
  window.addEventListener(listener, (_event) => {
    func(_event.detail)
  })
}

events.debounce = (fn, wait) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    const context = this
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

events.throttle = (fn, wait) => {
  let throttled = false
  return function (...args) {
    if (!throttled) {
      fn.apply(this, args)
      throttled = true
      setTimeout(() => {
        throttled = false
      }, wait)
    }
  }
}

export default events
