
//let: printNumTwo()的值是2；var: 值是3.因为let的情况i++后， i的作用域失效，i只能是2
let printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    console.log(">"+i);
    printNumTwo = function() {
          console.log(">>"+i);
          return i;
    };
    console.log(">>>"+i);
  }
}   

console.log(">>>>");


console.log(printNumTwo());
console.log(i);



const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// 只修改这一行下面的代码
const half = (stats) => (stats.max + stats.min) / 2.0;
// 只修改这一行上面的代码
console.log(half(stats));
// 只修改这一行上面的代码


// 只修改这一行下面的代码
class Thermostat{
  constructor(degree){
    this._degree = degree;
  }

  get temperature(){
    return 5/9 * (this._degree - 32);
  }

  set temperature(updateDegree){
    this._degree = updateDegree;
  }

}
// 只修改这一行上面的代码

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 摄氏度
console.log(temp)


const myPromise = new Promise((resolve, reject) => {
  if(true) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});