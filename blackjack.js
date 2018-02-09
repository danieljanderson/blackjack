//var DECK = require('./deck.js')
var blackjack = (function (num){
          // to add a single card to a players hand it would be hand.push(draw(deck))
          //calculate dealer hands if >=17 dealer stays
          //dealer flips two cards
          //calculate hand value
          //dealer draws two cards but only flips one over (player hand and deck)
          //player draws two cards takes (player hand and deck)
          //shuffle deck  takes deck 
          //get deck which takes a deck
          function getScore (hand){
            var total = 0
            for (i=0;i<hand.length;i++){
                if (hand[i].value==='King'||hand[i].value==='Queen'||hand[i].value==='Jack'){
                    hand[i].value = 10
                 }
                else if (hand[i].value ==='Ace'){
                    hand[i].value = 11
                  }
                else{
                    hand[i].value = Number(hand[i].value)
                    }
              total = total + hand[i].value
              }
            return total
          }
        
          // takes a number and  returns a shuffled shoe with that many decks that many times *5
          function getDeck(num){  
              var blackjackDeck = newDeck.getShoe(num)
              for (i=0; i<=num*5;i++){
                  blackjackDeck = newDeck.Shuffle(blackjackDeck)
              }
              return blackjackDeck
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
    'draw':draw,
    'getScore':getScore
    
	}
  return module


} )()