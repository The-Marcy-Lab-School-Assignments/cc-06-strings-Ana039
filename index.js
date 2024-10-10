//write your code here
const reverseString = (str) => {
let s = ""
for (let i = str.length - 1; i >= 0; i--) {
    s += str[i]
}
return s;
}
console.log(reverseString("hello"));
console.log(reverseString("oo"));
console.log(reverseString(""));

