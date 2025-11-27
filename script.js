const btnOpen = document.querySelector(".btn-open");
const factForm = document.querySelector(".fact-form");

btnOpen.addEventListener("click", function(){
  factForm.classList.toggle("hidden");
  factForm.classList.contains("hidden") ? btnOpen.textContent = "Share a fact" : btnOpen.textContent = "Close";
});


//==================================//
//<<                              >>//
//==================================//


/*
let votesInteresting = 23;
let votesMindblowing = 5;

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:" + totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc"));
*/


//==================================//
//<<                              >>//
//==================================//


// function calcFactAge(year){
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;
//   return age;
// };

// const age1 = calcFactAge(2000);
// console.log(age1);
// console.log(calcFactAge(2022));
// console.log(calcFactAge(1990));

// let votesInteresting = 20;
// let votesMindblowing = 5;

// if(votesInteresting === votesMindblowing){
//   alert('This fact equally interesting and mindblowing!');
// }else if(votesInteresting > votesMindblowing){
//   console.log('Interesting fact!');
// }else if(votesInteresting < votesMindblowing){
//   console.log('Mindblowing fact!');
// }

// // falsy values: 0, '', null, undefined
// // truthy value: everything else...
// if(votesMindblowing){
//   console.log('MINDBLOWING FACT');
// }else{
//   console.log('Not so special...');
// }

// let votesFalse = 7; 
// let verdict = document.querySelector(".verdict");
// const totalUpvotes = votesInteresting + votesMindblowing;

// const message = totalUpvotes > votesFalse 
//   ? "The fact is true" 
//   : "Might be false, check more sources...";

// // alert(message);

// const text = "Lisbon is the capital of Portugal";
// const upperText = text.toUpperCase();

// const str = `The current fact: ${upperText}. It is ${calcFactAge(2015)} years old. It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}`;
// console.log(str);

const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(createdIn);

const newFact = [...fact, "society"];
console.log(newFact);