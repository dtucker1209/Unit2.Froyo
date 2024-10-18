// prompt user for what flavors they want
const userInputString = prompt(
    "Please Select the Flavors That You Want.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",")

const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    flavors.push(flavors); 
}
console.log(flavors);
console.log(`You have given ${getLength(flavors)} flavors.`);

function getLength(flavors) {
    return flavors.length
}
getLength = stringArray.length


const count = {}
for ( let ele of stringArray) {
    if (count[ele]) {
        count [ele] += 1;
    } else{
        count [ele] = 1;
    }
}

console.log(count);

