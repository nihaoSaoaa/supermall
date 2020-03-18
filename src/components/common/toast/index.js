import notification from './notification'

let newInstance = null;

function getNewInstance() {
  if (newInstance) return newInstance;
  else {
    newInstance = notification.newInstance()
    return newInstance
  }
}

function notice(msg, cb) {
  newInstance = getNewInstance();
  newInstance.show(msg, cb)
}

export default {
  show(msg, cb) {
    notice(msg, cb)
  }
}