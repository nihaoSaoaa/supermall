import notification from './notification'

let newInstance = null;

function getNewInstance() {
  if (newInstance) return newInstance;
  else {
    newInstance = notification.newInstance()
    return newInstance
  }
}

function notice(msg, delay = 1000) {
  newInstance = getNewInstance();
  return newInstance.show(msg ,delay)
}

export default {
  show(msg ,delay) {
    return notice(msg, delay)
  }
}