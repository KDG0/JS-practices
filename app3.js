/* //explample simple for
for (let index = 1; index<=10; index++) {
    
    console.log(`${index}x${index} = ${index * index}`);
}
//example for backwards
for (let i = 200; i>0; i -=25){
console.log(i)
}
//example for backwars
for (let i = 10; i>0; i--){
    console.log(i);
}

//example for with array
const score = [98, 95, 91, 99];
for (let index = 0; index < score.length; index++) {
    console.log(score[index])
    
} */

//example for with objects and arrays
/* const studen = [
    {
        firstName: 'Zeus',
        grade: 99
    },   {
        firstName: 'Artemis',
        grade: 85
    },   {
        firstName: 'Hera',
        grade: 77
    },   {
        firstName: 'Apollo',
        grade: 86
    }  
];

for (let i = 0; i < studen.length; i++){
    let stu = studen[i];
    console.log(`${stu.firstName} scored ${stu.grade}`);
} */

//example for with string
/* const word = 'stressed';
for (let i= word.length -1; i>=0; i--){
    console.log(word[i]);
} */

//example for with grades
/* let total = 0;
for (let i = 0; i < studen.length; i++){
    let stu = studen[i];
    total += stu.grade;
}
console.log(total/studen.length); */

/* const chorus = 'Da ba dee da ba daa';
for (let i=0; i<6;i++){
    console.log (`${chorus}`)
} */

//nested loops for
/* const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [5,32,5,7],
    [5,6,3,2]
];
for (let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    console.log(row);
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}
 */
//While example

/* const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10); 
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log (`Congrats`) */