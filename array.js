function range(startNum, finishNum) {
  
  var tampung[];
  for (var i = startNum; i <= finishNum; i++){
    //state.push (i + 1);
    tampung[i] = i;
  }
  
  // if (startNum == null && finishNum == null){
  //   return tampung=-1;
  // }
  //return startNum
}

//Jika parameter pertama dan kedua tidak diisi maka function akan menghasilkan nilai -1

// Code di sini
 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 