// function empty variable
function emptyVariable(empVar){
  switch(typeof empVar){
    case "object":
      empVar = null;
      break;
    case "string":
      empVar = "";
      break;
    case "number":
      empVar = 0;
      break;
    case "boolean":
      empVar = false;
      break;
    default:
      empVar = undefined;
  }
  return;
}
