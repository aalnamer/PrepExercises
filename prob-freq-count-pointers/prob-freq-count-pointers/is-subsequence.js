// add whatever parameters you deem necessary
// function isSubsequence(msg, str) {
//   let msgList = [];
//   for (let i = 0; i <= msg.length - 1; i++) {
//     msgList.push(msg[i]);
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (msgList.includes(str[i])) {
//       let idx = msgList.indexOf(str[i]);
//       msgList.splice(idx, 1);
//       console.log(msgList);
//     }
//   }
//   return msgList.length === 0;
// }
function isSubsequence(msg, str2) {
  let i = 0;
  let j = 0;

  while (i < msg.length && j < str2.length) {
    if (msg[i] === str2[j]) {
      i++;
    }
    j++;
  }
  return i === msg.length;
}

module.exports = { isSubsequence };
