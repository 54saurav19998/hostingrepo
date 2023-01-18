let n = 5;
let s = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
        s += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        s += "*";
    }
    s += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        s += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
        s += "*";
    }
    s += "\n";
}
console.log(s);