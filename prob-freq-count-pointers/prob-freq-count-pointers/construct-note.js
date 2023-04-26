// add whatever parameters you deem necessary
function constructNote(msg, str) {
  let msgList = new Map();
  let strList = new Map();

  for (let i = 0; i < msg.length; i++) {
    const letter = msg[i];
    const count = msgList.get(letter) || 0;
    msgList.set(letter, count + 1);
  }

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const count = strList.get(letter) || 0;
    strList.set(letter, count + 1);
  }

  for (let [letter, count] of msgList.entries()) {
    const strCount = strList.get(letter);
    if (!strCount || strCount < count) {
      return false;
    }
  }
  return true;
}

module.exports = { constructNote };
