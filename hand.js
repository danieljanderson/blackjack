var player = (function(){
  function hand(){
    this.cards = [],
    this.value = 0,
    this.money = 0
  }  
  
  var module = {
      'hand':hand
  }
  return module  
})()
module.exports=player