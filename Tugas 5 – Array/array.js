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

  }//jika semua parameter tidak null maka masuk ke sini
  else if(awalderet != null && akhirderet != null && step != null){
    var tampung = rangeWithStep(awalderet, akhirderet, step);
    var total = 0;

    for(i = 0; i < tampung.length; i++){
      total += tampung [i]
    }
    return total;

  }//jika hanya terdapat parameter awalderet maka sum bernilai awalderet
  else if(awalderet != null && akhirderet == null && step == null){
    total = awalderet;
    return total;
  }//jika parameter kosong semua maka return 0;
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

console.log('\nNo.4-------------------------------\n');


  var input = [
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ];
  //console.log(input[0][0]);

function dataHandling(masukan){
  var n = masukan.length;
  for(var i = 0; i < n; i++){
    //for(var j = 0; j < 5; j++){
      var satu = "Nomor ID: " + input[i][0];
      var dua = "Nama Lengkap: " + input[i][1];
      var tiga = "TTL: " + input[i][2] + " " + input[i][3];
      var empat = "Hobi: " + input[i][4] + "\n";
    //}
      console.log(satu);
      console.log(dua);
      console.log(tiga);
      console.log(empat);
  }
}
dataHandling(input);
console.log('\nNo.5-------------------------------\n');
// // Code di sini
function balikKata(kata){
  var tampil = "";
  for(i = kata.length-1; i >= 0; i--){
      tampil += kata[i];
  }
  return tampil;
} 

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 