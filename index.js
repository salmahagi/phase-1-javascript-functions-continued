// code your solution here
const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}







console.log(saturdayFun("go hiking")); // Output: "This Saturday, I want to go hiking!"
console.log(saturdayFun());            // Output: "This Saturday, I want to roller-skate!"

console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."
console.log(mondayWork());                 // Output: "This Monday, I will go to the office."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing"));  // Output: "You are !!!amazing!!!"
console.log(wrapAdjective("%")("a dedicated programmer")); // Output: "You are %a dedicated programmer%!"
