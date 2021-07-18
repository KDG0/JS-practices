//console.log(3+4)
//console.error("do it again")
//if example 1
let exp = 1;
if(exp === 1){
    console.log("Worked")
}

//if example 2
let vr = 2;
if (vr %2 !== 0) {
    console.log('odd number')
} else {
    console.log('even number')
}

//if example 3
let highscore = 1400;
let usrscore  = 1500;
if (usrscore >= highscore) {
    console.log(`congrats, the new high is ${usrscore}`);
    highscore = usrscore;
} else {
    console.log(`sorry, you have to bit ${highscore} to get it`);
}

//if example 4
let phrase = 'go';
if (phrase === 'stop') {
    console.log('Red')
} else if (phrase === 'slow') {
    console.log('yellow')
} else if (phrase === 'go') {
    console.log('green')
} else {
    console.log ('purple')
}
    
