console.log('utils.js')

// const add = function (a,b){
//     return a+b
// }
// module.exports = add
const randomWithRange=function (low, high) {
    return Math.random() * (high - low) + low
  }
 module.exports=randomWithRange