// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let num1String = num1.toString();
  let num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    console.log("running");
    return false;
  }

  let num1StringList = new Map();
  let num2StringList = new Map();

  for (let i = 0; i < num1String.length; i++) {
    const number = num1String[i];
    const count = num1StringList.get(number) || 0;
    num1StringList.set(number, count + 1);
  }
  for (let i = 0; i < num2String.length; i++) {
    const number = num2String[i];
    const count = num2StringList.get(number) || 0;
    num2StringList.set(number, count + 1);
  }

  for (let [number, count] of num1StringList.entries()) {
    const num2StringCount = num2StringList.get(number);
    if (num2StringCount !== count) {
      return false;
    }
  }
  return true;
}

module.exports = { sameFrequency };
