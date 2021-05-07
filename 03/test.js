




let myArr = [];
function rangeOfNumbers(startNum, endNum) {
  console.log(myArr);
  if(startNum == endNum){
      myArr.push(endNum);
  }else if(startNum < endNum){
    console.log(myArr);

      myArr.push(startNum);
      rangeOfNumbers(startNum+1, endNum);
  }
  return myArr;

  
};

rangeOfNumbers(1,5);