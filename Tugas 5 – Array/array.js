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
  var tampung = [];
  //var j = [];

  if(startNum < finishNum){
    for(var i = startNum; i <= finishNum;){
      tampung.push(i);
      i = i + step;   
    }
    return tampung;
  }else if(startNum > finishNum){
    for(var i = startNum; i >= finishNum;){
      tampung.push(i);
      i -= step;   
    }
    return tampung;//sort(function (value1, value2) { return value2 - value1 });
  }
}
 
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log('\nNo.3-------------------------------\n');
//Buatlah sebuah function dengan nama sum() yang menerima tiga parameter yaitu angka awal deret, angka akhir deret, dan beda jarak (step). Function akan mengembalikan nilai jumlah (sum) dari deret angka. contohnya sum(1,10,1) akan menghasilkan nilai 55.

//ATURAN: Jika parameter ke-3 tidak diisi maka stepnya adalah 1.
function sum(awalderet, akhirderet, step){
  if(awalderet != null && akhirderet != null && step == null){ //jika step kosong maka nilainya 1
    step = 1;
    var tampung = rangeWithStep(awalderet, akhirderet, step);
    var total = 0;

    for(i = 0; i < tampung.length; i++){
      total += tampung [i]
    }
    return total;

  }
  else if(awalderet != null && akhirderet != null && step != null){
    var tampung = rangeWithStep(awalderet, akhirderet, step);
    var total = 0;

    for(i = 0; i < tampung.length; i++){
      total += tampung [i]
    }
    return total;

  }
  else if(awalderet != null && akhirderet == null && step == null){
    total = awalderet;
    return total;
  }
  else{
    return 0;
  }

}
// Code di sini
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 