var SUITS = ['Clubs','Diamands','Hearts','Spades']
var ORDER_VALUE = ['Ace','1','2','3','4','5','6','7','8','9','10','Jack','Qeen','King']
// card is an object
var card = {
  suit :'',
  order_value:'',
  image:'',
  flip_over:true 
}
//deck is an array of card objects
var deck = {}
// shoe is an array of decks
var shoe = []

var createDeck = function(card){
  var card_array=[]
  for (i=0;i<SUITS.length;i++){
    for(j=0; j<ORDER_VALUE.length;j++){
      var tempCard={flip_over:true}
      tempCard.suit=SUITS[i]
      tempCard.order_value=ORDER_VALUE[j]
      tempCard.image='image/'+tempCard.suit+tempCard.order_value
   // this displayes correctly
       //console.log(card)
      card_array.push(tempCard)
   
    }
  }
  //this displays the last card over and over again 
  //console.log(card_array)
 return card_array
  
}

deck.cards=createDeck(card)
console.log(deck)