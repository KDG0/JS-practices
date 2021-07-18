//explample simple for
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
    
}

//example for with objects and arrays
const studen = [
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