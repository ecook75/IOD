//const router = require("../routes/calculatorRoutes");
const Calculator = require("../libraries/calculator");
const Logger = require("../libraries/logger");
const calc = new Calculator()
//const logger = new Logger
this.logger = new Logger()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
   // let sum = number1 + number2
   let sum = calc.add(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    //let product = number1 * number2
    let product = calc.multiply(number1, number2)
    console.log(product)
    res.status(200)
    res.json({result:product})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    //let difference = number1 - number2
    let difference = calc.subtract(number1, number2)
    console.log(difference)
    res.status(200)
    res.json({result:difference})
}
const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2); 
    let fraction = calc.divide(number1, number2)
    //let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
}

const makeText = (req, res) => {
    let phone1 = parseInt(req.query.phone1);
    let number2 = parseInt(req.query.num2);
   // let sum = number1 + number2
   let action = this.logger.textmessage(phone1, number2)
    console.log(action)
    res.status(200)
    res.json({result:action})
}


module.exports = {
    addNumbers, multiplyNumbers, subtractNumbers, divideNumbers, makeText
}
