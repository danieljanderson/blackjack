//var DECK = require('./deck.js')
var blackjack = (function (num){
         	// to get the score to display correctly you have to player[1].value=blackjack.getScore(player[1].hand).
					// to start deal to start the game have a nested for loop where it looks like this...  2 beacue in black jack you start off with 2 cards always
					// for (i=0;i<=2;i++)
					//		for(j=0;j<=numberofplaers_including_dealer;j++)
					//			numberofplayers[j] draws and then it gos around.  flip the order of the j and i loops if you deal 2 cards at a time
					// to add a single card to a players hand it would be hand.push(draw(deck))
          //calculate dealer hands if >=17 dealer stays
          //dealer flips two cards
          //calculate hand value
          //dealer draws two cards but only flips one over (player hand and deck)
          //player draws two cards takes (player hand and deck)
          //shuffle deck  takes deck 
          //get deck which takes a deck
         
				var Deck = casino.Deck
				 var player = casino.Player
				 var Shoe = casino.Shoe
			function endGame(listOfPlayers){
				var dealer = listOfPlayers[listOfPlayers.length-1]
				//-2 because dealer will always be listOfPlayers.1
				for (var i = 0; i<=listOfPlayers.length-2;i++){
						if(listOfPlayers[i].value>dealer.value){
							listOfPlayers[i].results= " "+ listOfPlayers[i].name+'you win'
						}
						else if(listOfPlayers[i].value<dealer.value){
						listOfPlayers[i].results= " "+ listOfPlayers[i].name+'you win'
						}
						else{
						listOfPlayers[i].results= " "+listOfPlayers[i].name+'you push with the dealer'
						}
				}
			}
			function changePlayers(listOfPlayers){
				
				var index = getCurrentPlayer(listOfPlayers)
				listOfPlayers.currentPlayer = listOfPlayers.playersArray[index+1].name
			}
			function dealerGame(player,deck){
				var dealer = player[player.length-1]
				dealer.hand[0].flipOver=true
				dealer.value=getHandTotal(dealer.hand)
				while (dealer.value<=16){
						if (dealer.value<17){
							dealer.hand = hit(dealer.hand,deck)
							dealer.value=getHandTotal(dealer.hand)
					
						}
						else if(dealer.value<=21 && dealer.value>=17){
						return dealer.value
						}
						else if (isBust){
						return dealer.value
						}
				}
			}
			function getCurrentPlayer(listOfPlayers){

					var index = listOfPlayers.playerNames.indexOf(listOfPlayers.currentPlayer)
					return index
				
			}
			function startGame(listOfPlayers,deck){
					for (var i = 0; i<listOfPlayers.playersArray.length;i++){
							for (var numCards = 1;numCards<=2;numCards++){
							listOfPlayers.playersArray[i].hand = listOfPlayers.playersArray[i].hand.concat(draw(deck))
									if (listOfPlayers.playersArray[i].dealer && numCards===1){
											listOfPlayers.playersArray[i].hand[0].flipOver = false
									}
								}
					}
			listOfPlayers.currentPlayer = listOfPlayers.playersArray[0].name
						
		}
			function getHandTotal (hand){
    	var total = 0
			var ace_count = 0
			
					for (var j=0;j<hand.length;j++){
								//checks to see if the total is greater than 21.
							isBust(total)
							isTwentyOne(hand)		
								// the if statement checks to see if the total is more than 21 and if so makes the ace 1.
            if (hand[j].order==='King'||hand[j].order==='Queen'||hand[j].order==='Jack'){
                   			 hand[j].value= 10
               }
              else if (hand[j].order ==='Ace'){
                    		hand[j].value = 11
											ace_count++
               }
              else{
                    hand[j].value = Number(hand[j].order)
              }
            total = hand[j].value+total
					}
				for(var i=0;i<ace_count;i++){
					if (total <=21){
						return total
						}
				total-=10
				}
          	return total
      }
			function hit (listOfPlayers,hand,deck){
					hand = hand.concat(draw(deck))
					hand.value = getHandTotal(hand)
					if (hand.value>22){
						changePlayers(listOfPlayers)
					}
					return hand
			}
        
          // takes a number and  returns a shuffled shoe with that many decks that many times *5
      function getDeck(num){  
              var blackjackDeck = new Shoe(num)
              for (i=0; i<=num*5;i++){
                 blackjackDeck.shuffle(num)
              }
              return blackjackDeck
        }
          // takes a number and  returns that many  players hand plus a dealer
      function getPlayer(num){
              var listOfPlayers = {'playersArray':[], 'currentPlayer':null,'playerNames':[]} 
                  //start the loop at one because thats how normal people count
                  for(var i=1;i<=num+1;i++){
                    var blackjackPlayer = new player() 
                    blackjackPlayer.name = 'player'+ i
										listOfPlayers.playerNames.push('player'+i)
                  	if (i===num+1){
                      	blackjackPlayer.name = 'dealer'
												listOfPlayers.playerNames.push('dealer')
                      	blackjackPlayer.dealer = true   
                  	}
                  listOfPlayers.playersArray.push(blackjackPlayer)
                  }
                //to acess the players its variablename[index]. and what you want
                return listOfPlayers
                
          }
		 function isTwentyOne(hand){
			 if(hand[0].value===10||11){
				 if(hand[1].value===10||11){
					 return true
				 }
			 }
		 }
		 function isBust (score){
			 if (score>21){
				 return true
			 }
			 else{
				 return false
			 }
		 }
	
     function draw(deck){
         var tempCard= deck.Shoe.splice(1,1)
         return tempCard
       }
     
      
	var module ={
		'getDeck':getDeck,
    'getPlayer':getPlayer,
    'draw':draw,
    'getHandTotal':getHandTotal,
		'startGame':startGame,
		'hit':hit,
		'isBust':isBust,
		'isTwentyOne':isTwentyOne,
		'getCurrentPlayer':getCurrentPlayer,
		'dealerGame':dealerGame,
		'changePlayers':changePlayers,
		'endGame':endGame,
	
    
	}
  return module


} )()
