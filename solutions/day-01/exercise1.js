const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

//1
const emptyArr = Array();

//2
const moreThanFive = [1, 2, 3, 4, 5, 6, 7];

//3
console.log(moreThanFive.length);

//4
console.log("4: ", moreThanFive[0]);
console.log("4: ", moreThanFive[Math.floor((moreThanFive.length - 1) / 2)]);
console.log("4: ", moreThanFive[moreThanFive.length -1]);

//5
const mixedDataTypes = [
    "Daniel",
    42,
    19.32,
    [1, 2, 3],
    {text: "This is a test"},
    true
];
console.log("5: ", mixedDataTypes.length);

//6
const itCompanies = [
    "Facebook", 
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
];

//7
console.log("7: ", itCompanies.toString());

//8
console.log("8: ", itCompanies.length);

//9
console.log("9: ", itCompanies[0]);
console.log("9: ", itCompanies[Math.floor((itCompanies.length - 1) / 2)]);
console.log("9: ", itCompanies[itCompanies.length -1]);

//10
console.log("10: ", itCompanies.join(", "));

//11
itCompanies.forEach(comp => console.log("11: ", comp.toUpperCase()));