// function hexadecimal to decimal 
function hex2dec(val) {   
  if ("string" !== typeof val){
      val = val.toString();
    }
    val = val.toUpperCase();
    var hex = val.split('').reverse().join('');
    var dec = 0;
    for (i = 0; i < hex.length; i++) {
       var conv = '0123456789ABCDEF'.indexOf(hex[i]);
        dec += conv * Math.pow(16, i);
    }
    return dec;
}
