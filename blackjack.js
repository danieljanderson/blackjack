//var DECK = require('./deck.js')
var blackjack = (function (num){
          //calculate dealer hands if >=17 dealer stays
          //dealer flips two cards
          //calculate hand value
          //dealer draws two cards but only flips one over (player hand and deck)
          //player draws two cards takes (player hand and deck)
          //shuffle deck  takes deck 
          //get deck which takes a deck
          
        // takes a number and  returns a shuffled shoe with that many decks
          function getDeck(num){  
              var blackjackDeck = newDeck.getShoe(num)
              var readyDeck = newDeck.Shuffle(blackjackDeck)
              return readyDeck
              }
          // takes a number and  returns that many  players hand plus a dealer
          function getPlayer(num){
              var listOfPlayers = [] 
                  //start the loop at one because thats how normal people count
                  for(i=1;i<=num+1;i++){
                      var blackjackPlayer = new player.Hand() 
                      blackjackPlayer.name = 'player'+ i
                  if (i===num+1){
                      blackjackPlayer.name = 'dealer'
                      blackjackPlayer.dealer = true   
                  }
                  listOfPlayers.push(blackjackPlayer)
                  }
                //to acess the players its variablename[index]. and what you want
                return listOfPlayers
                
          }
          function draw(deck){
              var tempCard= deck.splice(1,1)
              return tempCard
          }
     
      
  var module ={
		'getDeck':getDeck,
    'getPlayer':getPlayer,
    'draw':draw
    
	}
  return module


} )()