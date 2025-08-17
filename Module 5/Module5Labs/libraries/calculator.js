const Logger = require("./logger.js")

class Calculator {
constructor() {
this.logger = new Logger()
}

add(num1, num2) {
const value = num1 + num2
this.logger.log(value)
return value;
}
}
module.exports = Calculator