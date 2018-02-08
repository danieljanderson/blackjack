var player = (function(){
  var hand = {
    'cards':[],
    'value':0
  }  
  
  var module = {
      'hand':hand
  }
  return module  
})()
module.exports=player