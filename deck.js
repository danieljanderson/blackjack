var newDeck = (function(){
    var deck = function (){ 
       var SUITS = ['Clubs','Diamands','Hearts','Spades']
        var ORDER_VALUE = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Qeen','King']
    this.createDeck = function(){
        this.card_array=[]
        for (i=0;i<SUITS.length;i++){
            for(j=0; j<ORDER_VALUE.length;j++){
                var tempCard={}
                tempCard.suit=SUITS[i]
                tempCard.order_value=ORDER_VALUE[j]
                tempCard.image='image/'+tempCard.suit+tempCard.order_value
                tempCard.flip_over=true
                this.card_array.push(tempCard)
                      }
                }
       return this.card_array
}
   this.shuffle = function(){
        var randomizedDeck = []
        var tempDeck = this.createDeck()
        while (tempDeck.length!==0){
            var rIndex= Math.floor(tempDeck.length * Math.random())
            randomizedDeck.push(tempDeck[rIndex])
             tempDeck.splice(rIndex,1)
        }
         return randomizedDeck
    }
  }

  var module ={
	"Deck":deck
}
  return module
})()


