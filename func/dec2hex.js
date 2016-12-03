// function decimal to hexadecimal
// (4 char, max FFFF)
function dec2hex(dec) {
var hex = Number(dec).toString(16);
var hex = hex.toUpperCase();
return "0000".substr(0, 4 - hex.length) + hex;
}
