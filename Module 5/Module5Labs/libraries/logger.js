
class Logger {
  constructor() {
    this.id = getRandomInt(3);
    this.log = (value) => {
      console.log(`[Calculator :${this.id}]:${value}`);
    };
    this.textmessage = (phonenumber, message) => {
      console.log(`[messageInfo :${phonenumber}]:${message}`);
    };
  }
}
module.exports = Logger;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));

