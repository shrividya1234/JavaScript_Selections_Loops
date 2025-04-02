console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100 ; i++){
    if(i%2 !==0)
        {
            console.log(i)
        }
}
   
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i<= 100; i++){
    if(i%3===0 && i%5 ===0){
        console.log(`${i} : FIZZBUZZ`);
    }else if ( i%3 ===0) {
        console.log(`${i} : FIZZ`);
    }else if ( i%5 ===0) {
        console.log(`${i} : BUZZ`);        
    }else {
        console.log(`${i} is not visible by 3 or 5`)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;
while (i <= 100){
    if(i %2 !==0){
        console.log(i);
    }
    i++;
} 
i =1;
do {
    if(i %2 !==0){
        console.log(i);
    }
    i++;
}while (i <= 100);

i = 1;

do{
    if(i%3===0 && i%5 ===0){
        console.log(`${i} : FIZZBUZZ`);
    }else if ( i%3 ===0) {
        console.log(`${i} : FIZZ`);
    }else if ( i%5 ===0) {
        console.log(`${i} : BUZZ`);        
    }else {
        console.log(`${i} is not visible by 3 or 5`)
    }
    i++;
}while(i<= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for (let i =1 ; i<=n ; i++){
if (i ==value){
    console.log("value found!!");
    found = true;
    break;
 }
}
if (!found){
    console.log("Could not find the value");
}

// Exercise 5  Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
for(let i = start ; i<= end ; i++){
    if(i % fizzDivisor === 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log("FIZZ");
    }else if (i % buzzDivisor == 0 ){
        console.log("BUZZ");
    }
}