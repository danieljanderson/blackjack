var newDeck = (function(){
		var SUITS = ['Clubs','Diamands','Hearts','Spades']
    var ORDER_VALUE = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Qeen','King']
    //creates a 52 card deck
		function getCard(suit,value){
				var singleCard={
			 	'suit':suit,
				'order':value,
				'value':value,	
				'flip_over':false,
				'image':'image/'+suit+value
		 			}
		return singleCard
		 }			 
		function getDeck(){
		var deck=[]
		for (i=0;i<SUITS.length;i++){
			for(j=0;j<ORDER_VALUE.length;j++){
					var card = getCard(SUITS[i],ORDER_VALUE[j])
					deck.push(card)
					}
			}
		return deck
	}
		function shoe (numberOfDecks){
				var shoe = []
				for (var shoedeck = 0; shoedeck<numberOfDecks;shoedeck++){
					var tempDeck = getDeck()
					shoe = shoe.concat(tempDeck)
				}
		return shoe
			}
	

		//shuffles deck
   function shuffle(arrayOfCards){
        var randomizedDeck = []
        while (arrayOfCards.length!==0){
            var rIndex= Math.floor(arrayOfCards.length * Math.random())
            randomizedDeck.push(arrayOfCards[rIndex])
             arrayOfCards.splice(rIndex,1)
        }
         return randomizedDeck
    }
  	
	

  var module ={
		'getCard':getCard,
		'getDeck':getDeck,
		'getShoe':shoe,
		'Shuffle':shuffle
	}
  return module
})()
module.exports=newDeck
