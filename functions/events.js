let events = {}
events.send = (listener, msg) => {
  window.dispatchEvent(
    new CustomEvent(listener, {
      detail: msg,
    })
  )
}

events.receive = (listener, func) => {
  window.addEventListener(listener, (_event) => {
    func(_event.detail)
  })
}

export default events
