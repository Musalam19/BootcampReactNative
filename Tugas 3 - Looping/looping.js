var i = 0;
var genap = 2;

console.log("LOOPING PERTAMA")
while(i < 10){
  console.log(genap + ' - ' + 'I love coding');
  
  genap = genap + 2;
  i++;
}

var balik = 20;
i = 0;

console.log("LOOPING KEDUA")
while(i < 10){
  console.log(balik + ' - ' + 'I love coding');
  
  balik = balik - 2;
  i++;
}

console.log('-------------------------------');

var j;
for(j=1; j<=20; j++){
  if(j%3 == 0 && j%2 == 1){
    console.log(j + " - " + "I Love Setan");
  }
  else if(j%2 == 0){
    console.log(j + " - " + "Berkualitas");
  }
  else{
    console.log(j + " - " + "Santai");
  }
}

console.log('-------------------------------');

var k;
for(j=0; j<4; j++){
  //for(k=0; k<8; k++){
    console.log("########");
  //}
}

console.log('-------------------------------');

var pager = "########"
for(j=7; j>0; j--){
  var pager2 = pager.substr(j);
  console.log(pager2);
}

console.log('-------------------------------');

var gnjl = " # # # #"
var gnp = "# # # # "

for(j=1; j<=8; j++){
  if(j%2 == 0){
    console.log(gnp);
  }
  else{
    console.log(gnjl);
  }
}