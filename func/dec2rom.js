// FUNCTION  decimal to romal

function dec2rom(nmbr){
  var _nr = Math.round(nmbr);
  if (_nr < 0 || _nr >= 5000){
     alert('Value should be less than 5000');
     break;
   }
    var tH = Math.round(_nr / 1000);
    _nr = _nr - (tH * 1000);
    var hU = Math.round(_nr / 100);
    _nr = _nr - (hU * 100);
    var tE = Math.round(_nr / 10);
    var oN = _nr - (tE * 10);
    var romal = "", rom1 = "", rom2 = "", rom3 = "", rom4 = "";
    for (var i=0;i<tH;i++){
      var rom1 += "M";
    } 
  switch(hU){ 
    case 9: 
    var rom2 = "CM"; 
    var hU = 0;
    break; 
    case > 4: 
    var rom2 = "D";
    var hU = hU - 5; 
    break; 
    case < 4:
    break;  
    default: 
    var rom2 = "CD";  
    var hU = 0;  
    }   
    for (var i=0;i<hU;i++){
      var rom2 += "C";  
    }  
  switch(tE){ 
    case 9:   
    var rom3 = "XC"; 
    var tE = 0;  
    break;   
    case > 4:
    var rom3 = "L"; 
    var tE = tE - 5; 
    break;  
    case < 4:  
    break;    
    default:   
    var rom3 = "XL";  
    var tE = 0;    
    }  
    for (var i=0;i<tE;i++){  
      var rom3 += "X";  
    }   
  switch(oN){ 
    case 9:   
    var rom4 = "IX"; 
    var oN = 0;    
    break;   
    case > 4:
    var rom4 = "V"; 
    var oN = oN - 5;   
    break;  
    case < 4:    
    break;    
    default:  
    var rom4 = "IV";     
    var oN = 0;        } 
    for (var i=0;i<oN;i++){   
      var rom4 += "I";   
    }   
    var romal = rom1 + rom2 + rom3 + rom4;
    return romal;
}
