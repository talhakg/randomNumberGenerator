const minNum = 1;
const maxNum = 100;

document.write(`Generate a random number between 
    ${minNum} to ${maxNum}`);

function generate() {
    returnNum = Math.floor(Math.random() * 
    (maxNum - minNum + 1)) + minNum;
    document.getElementById("result").innerHTML = returnNum;
}

