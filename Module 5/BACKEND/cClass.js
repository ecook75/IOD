const Calculator1 =
require('./libraries/Calculator');
let myCalc = new Calculator1()
myCalc.add(3,4)

const Calculator =
require('./libraries/Calculator');
let myCalc1 = new Calculator()
let myCalc2 = new Calculator()
myCalc1.add(3,4)
myCalc1.add(4,2)
myCalc2.add(5,4)