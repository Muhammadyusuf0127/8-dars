let son = +prompt("Diagnal soni kiriting");
let box = "";
if (son % 2==0) {
    son = son+1
}
for (let i = 0; i < son; i++) {
    for (let j = 0; j < son; j++) {
        if (
            i == j ||i == 0 ||j == 0 ||i == son - 1 ||j == son - 1 ||i == son - 1 - j
          ) {
            box = box + "🔵";
          } else {
            box += "🟣";
          }
    }
    console.log(box);
    box = "";
}
let surname = prompt("Familiyangizni kirirting");
let name = prompt("Ismingizni kirirting");
let age = +prompt("Yowingizni kirirting");
let getInfo = (surname,name,age) => {
    return `${surname}.${name}.${age}`
}
console.log(getInfo(surname,name,age));