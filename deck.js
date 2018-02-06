var newDeck = (function(){
 var deck = function (){ 
 var SUITS = ['Clubs','Diamands','Hearts','Spades']
var ORDER_VALUE = ['Ace','1','2','3','4','5','6','7','8','9','10','Jack','Qeen','King']
// card is an object
var card = {
  suit :'',
  order_value:'',
  image:'',
  flip_over:true 
}
this.createDeck = function(card){
   this.card_array=[]
  for (i=0;i<SUITS.length;i++){
    for(j=0; j<ORDER_VALUE.length;j++){
      var tempCard={flip_over:true}
      tempCard.suit=SUITS[i]
      tempCard.order_value=ORDER_VALUE[j]
      tempCard.image='image/'+tempCard.suit+tempCard.order_value
  
      this.card_array.push(tempCard)
   
    }
  }
  
 return this.card_array
}

this.createDeck()
}
deck.prototype.shuffle = function(){
 for (i=0;i<this.card_array.length;i++){
   var temp=this.card_array.splice(i,1)
   this.card_array.splice(Math.floor(Math.random()*this.card_array.lenth,0))
 } 
}
})