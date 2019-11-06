 const randomWithRange = require('./utils.js')
 const chalk=require('./node_modules/chalk')
// const sum = add(4,-2)
// console.log(sum)
//console.log(randomWithRange(1,5))
const myNumber=randomWithRange(1,10)
const log = console.log
if (myNumber<=3) {
    log(chalk.red(myNumber))
  } else if (myNumber>3 && myNumber<=6) {
    log(chalk.yellow(myNumber))
  } else {
    log(chalk.green(myNumber))
}