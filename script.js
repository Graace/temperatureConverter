let celcuisInput = document.querySelector('.celcuis > input');
let fahrenheitInput = document.querySelector('.fahrenheit > input');

let btn= document.querySelector('.btn');

function roundNumber(number){
  return Math.round(number*100)/100
};

celcuisInput.addEventListener('input',function(){
  let cTemp = parseFloat(celcuisInput.value);
  let fTemp = (cTemp*(9/5)) + 32;

  fahrenheitInput.value = roundNumber(fTemp);

  // if(celcuisInput.value===roundNumber){
  //   console.log(roundNumber(fTemp));
  //   alert('correct');
  // }else{};



  console.log(roundNumber(fTemp));
});



fahrenheitInput.addEventListener('input',function(){
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * (5/9);

  celcuisInput.value = roundNumber(cTemp);

  console.log(roundNumber(cTemp));
});

btn.addEventListener('click' , ()=>{
  celcuisInput.value = "";
  fahrenheitInput.value = "";
});