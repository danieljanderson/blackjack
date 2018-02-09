var player = (function(){
  function Hand(){
    this.name = '',
    this.cards = [],
    this.dealer = false,  
    this.handValue = 0,
    this.money = 0
  }  
  
  var module = {
      'hand':Hand
  }
  return module  
})()
module.exports=player