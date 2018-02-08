//var DECK = require('./deck.js')
var blackjack = (function (num,playerHand){
          //calculate dealer hands if >=17 dealer stays
          //dealer flips two cards
          //calculate hand value
          //dealer draws two cards but only flips one over (player hand and deck)
          //player draws two cards takes (player hand and deck)
          //shuffle deck  takes deck 
          //get deck which takes a deck
          function getDeck(num){  
              var blackjackDeck = newDeck.getShoe(num)
              var readyDeck = newDeck.Shuffle(blackjackDeck)
              return readyDeck
              }
          
          
     
      
  var module ={
		'getDeck':getDeck,
    
	}
  return module


} )()