function maxBets(invest, increase, maxInvest){
  for (var i=1; i<i+1; i++){
    invest = invest + (invest * increase);
    if (invest >= maxInvest) {
        break;
        }
    }
  return i;
}
