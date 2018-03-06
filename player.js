casino.Player = (function(){
  function createPlayerState(){
    this.name = '',
    this.hand = [],
    this.dealer = false,  
    this.value = 0,
    this.money = 0,   
    this.recieveCard = function (card){
       this.hand=this.hand.concat(card)
    }
   this.discard = function(index){
    var card = this.hand.splice(index,1)
    return card
   }
   this.discardHand = function (){
     var discards = []
     for (var i = 0;i<this.hand.length-1;i++){
       discards.push(this.hand[i])
       this.hand.splice(i,1)
     }
     return discards
   }
  }  
  
 
  return createPlayerState
})()







