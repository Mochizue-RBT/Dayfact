const calcBtn = document.querySelector(".calc-btn");
const containsBtn = document.querySelector(".calc-btn-contains");
const message = document.querySelector(".result-message");
const sumPill = document.querySelector(".summary-pill");
const emptyResult = document.querySelector(".empty");
const containsResult = document.querySelector(".contains");
const classification = document.querySelector(".logo-w-result p");
const emptyMessage = document.querySelector(".empty h1");
const weightDisplay = document.querySelector(".weight-box");
const heightDisplay = document.querySelector(".height-box");
const resultDisplay = document.querySelector(".output-box");
let bmiResults = [];
let weightBase = [];
let heightBase = [];

const bmiCalc = function (){
  // BMI calculation
  let weight = Number(prompt("⚖️ Enter Weight in kilograms:"));
  let height = Number(prompt("⚖️ Enter Height in inches:"));
  let bmi = Math.round(weight/(height * height));
  console.log(bmi);
  const emptyMess = "You must input the necessary fields to generate a result!";

  if(bmi < 18.5){
    classification.textContent = "Underweight";
    sumPill.classList.add("red");
    sumPill.classList.remove("green");
    sumPill.textContent = `Bad!`;
  }else if(bmi >= 18.5 && bmi < 25){
    classification.textContent = "Healthy";
    sumPill.classList.add("green");
    sumPill.classList.remove("red");
    sumPill.textContent = `Good!`;
  }else if(bmi >= 25 && bmi < 30){
    classification.textContent = "Overweight";
    sumPill.classList.add("red");
    sumPill.classList.remove("green");
    sumPill.textContent = `Bad!`;
  }else if(bmi > 30){
    classification.textContent = "Obese";
    sumPill.classList.add("red");
    sumPill.classList.remove("green");
    sumPill.textContent = `Bad!`;
  }else{
    classification.textContent = "Invalid";
    sumPill.classList.remove("red");
    sumPill.classList.remove("green");
    sumPill.textContent = `Inactive`;
  }

  if(!bmi){
    emptyMessage.textContent = emptyMess;
  }else{
    weightDisplay.textContent = weight;
    heightDisplay.textContent = height;
    resultDisplay.textContent = bmi;
    bmiResults.push(bmi);
    weightBase.push(weight);
    heightBase.push(height);
  } 

  if(bmiResults.length === 0){
    emptyResult.classList.remove("hidden");
    containsResult.classList.add("hidden");
  }else{
    emptyResult.classList.add("hidden");
    containsResult.classList.remove("hidden");
    if(!bmi){
      emptyResult.classList.remove("hidden");
      containsResult.classList.add("hidden");
    }else{
      emptyResult.classList.add("hidden");
      containsResult.classList.remove("hidden");
    }
  }

  for(i=0; i < weightBase.length; i++){
    console.log(`Weight: ${weightBase[i]}`);
    console.log(`Last value: ${weightBase[weightBase.length - 1]}`)
  }

  for(i=0; i < heightBase.length; i++){
    console.log(`Height: ${heightBase[i]}`);
  }

  for(i=0; i < bmiResults.length; i++){
    console.log(`BMI: ${bmiResults[i]}`);
  }

  return bmi;
};

calcBtn.addEventListener("click", ()=>{
  nameInput();
});

containsBtn.addEventListener("click", ()=>{
  bmiCalc();
});

const fact = [];
const attempts = [];
const entryAttempts = 3 - 1;
let userAttempts;
const password = "Mochi".toLowerCase();

function nameInput(){
  if(attempts.length <= entryAttempts){
    userAttempts = attempts.push(prompt("Enter password:").toLowerCase());
    for(i=0; i<attempts.length; i++){
      console.log(attempts[i]);
    }
    if(attempts[attempts.length - 1] === password){
      bmiCalc();
    }else{
      console.log("Wrong password!");
    }
  }else{
    console.log("You have reached the maximum number of input!");
  }
}

