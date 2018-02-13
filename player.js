casino.player = (function(){
  function Hand(){
    this.name = '',
    this.hand = [],
    this.dealer = false,  
    this.value = 0,
    this.money = 0
  }  
  
  var module = {
      'hand':Hand
  }
  return module  
})()
module.exports=player






