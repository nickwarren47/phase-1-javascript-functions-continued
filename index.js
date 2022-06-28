// code your solution here
// function saturdayFun(activity = "golfing", msg = "roller-skate"){
//     return `${greeting}, ${msg}`;
// }
// saturdayFun();

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun('bathe my dog');

function mondayWork(act = 'go to the office'){
    return `This Monday, I will ${act}.`
}
function wrapAdjective (def = "*"){
    return function innerFunction (insert = "special") {
        return `You are ${def}${insert}${def}!`
    }
}