console.log('\nNo.1-------------------------------\n');
function range(startNum, finishNum) {
  
  var tampung = [];
  //var tampil = [];

  if(startNum < finishNum){
    
    for (var i = 0; i <= finishNum; i++){
      //tampung.push (i);
      tampung [i] = i;
    }
  
    return tampung.slice(startNum, finishNum+1);

  }else if(startNum > finishNum){
    
    for (var i = startNum; i >= 0; i--){
      //tampung.push (i);
      tampung [i] = i+1;
    }

    return tampung.slice(finishNum-1, startNum).sort(function (value1, value2) { return value2 - value1 });  

  }else {
    return tampung=-1;

  }

}

//Jika parameter pertama dan kedua tidak diisi maka function akan menghasilkan nilai -1

// Code di sini
 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log('\nNo.2-------------------------------\n');
//struktur fungsinya seperti berikut rangeWithStep(startNum, finishNum, step) {}

// Code di sini
function rangeWithStep(startNum, finishNum, step) {
  
}
 
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 