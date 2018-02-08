var player = (function(){
  function hand(){
    this.name = '',
    this.cards = [],
    this.dealer = false,  
    this.value = 0,
    this.money = 0
  }  
  
  var module = {
      'hand':hand
  }
  return module  
})()
module.exports=player