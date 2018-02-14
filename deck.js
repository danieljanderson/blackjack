 casino.Deck = (function(){
		var SUITS = ['Clubs','Diamands','Hearts','Spades']
    var ORDER_VALUE = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
    //creates a 52 card deck
		function getCard(suit,value){
				var singleCard={
			 	'suit':suit,
				'order':value,
				'value':value,	
				'flipOver':true,
				'image':'image/'+suit+value+'.bmp'
		 			}
		return singleCard
		 }
		function Deck(){
			this.cards = [] 
			for (i=0;i<SUITS.length;i++){
				for(j=0;j<ORDER_VALUE.length;j++){
					var card = getCard(SUITS[i],ORDER_VALUE[j])
					this.cards.push(card)	
				}
			}
			this.shuffle = function (){
        var randomizedDeck = []
        while (this.cards.length!==0){
            var rIndex= Math.floor(this.cards.length * Math.random())
            randomizedDeck.push(this.cards[rIndex])
             this.cards.splice(rIndex,1)
        }
         this.cards = randomizedDeck
    }	
		}		
		
	
	


   
		


  return Deck
})()

