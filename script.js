const minNum = 1;
const maxNum = 100;
let count = 0;

function generate() {
    let Num = Math.floor(Math.random() *
    (maxNum - minNum + 1)) + minNum;
    document.getElementById("result").innerHTML = Num;

    count++;
    let word = "times";
    if(count === 1) {
        word = "time";
    }

    document.getElementById("info").innerHTML =
    `Generated ${count} ${word}`;
}