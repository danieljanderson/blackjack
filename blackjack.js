//var DECK = require('./deck.js')
var blackjack = (function (num){
	var game = function (num){
	var DEALER_INDEX = -1
	var current_turn = 0
	var deck = []
	this.playerArray =  []		

			function deal(playerArray,deck){
			for (var i = 0; i<playerArray.length;i++){
							for (var numCards = 0;numCards<2;numCards++){
							console.log('this is in a for loop')
								playerArray[i].recieveCard(deck.draw())	
							}
					}
		}
	function createDealer(){
		var dealer = new casino.Player()
		dealer.name='dealer'
		return dealer
	}
	 function createDeck (num){  
              var blackjackDeck = new casino.Shoe(num)
							console.log(blackjackDeck)
              for ( var i=0; i <= (num*5) ;i++){
                 blackjackDeck.shuffle()
              }
              return blackjackDeck
        }
		function  createPlayers(num){
                  var arrayOfPlayers = []
									for(var i=0;i<num;i++){
										//console.log(i)
                		//console.log(casino.Player())
										var newPlayer = new casino.Player() 
                    newPlayer.name= 'player'+ (i +1)
										//console.log(newPlayer)
										arrayOfPlayers.push(newPlayer)
       							//console.log("this is the end of the loop")
										//console.log(arrayOfPlayers)
                  	
                 
									}
                //to acess the players its variablename[index]. and what you want
                console.log(arrayOfPlayers)
									return arrayOfPlayers
									  
          }
			
			this.startGame=function(numOfPlayers,numOfDeck){
			console.log(createPlayers(numOfPlayers))
			this.playerArray = createPlayers(numOfPlayers)
			this.deck = createDeck(numOfDeck)	
			deal(this.playerArray,this.deck) 
			//this.dealer= createDealer()
		}
		
			/*this.endGame= function (){
				console.log("the end game"+listOfPlayers)
				var dealer = listOfPlayers.playersArray[listOfPlayers.length-1]
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

			function dealerGame(listOfPlayers,deck){
				var dealer = listOfPlayers.playersArray[listOfPlayers.playersArray.length-1]
				dealer.hand[0].flipOver=true
				dealer.value=getHandTotal(dealer.hand)
				while (dealer.value<=16){
						if (dealer.value<17){
							dealer.hand = hit(dealer.hand,deck)
							dealer.value=getHandTotal(dealer.hand)
					
						}
						else if(dealer.value<=21 && dealer.value>=17){
						listOfPlayers.playersArray[listOfPlayers.playersArray.length-1] = dealer.value
							endGame(listOfPlayers)
						}
						else if (isBust){
						listOfPlayers.playersArray[listOfPlayers.playersArray.length-1] = dealer.value
							endGame(listOfPlayers)
						}
				}
			}
			function getCurrentPlayer(){

					var index = listOfPlayers.playerNames.indexOf(listOfPlayers.currentPlayer)
					return index
				
			}// this is the function that will start create the game 
			function startGame(listOfPlayers,deck){
			this.playerArray = createPlayers(num)
			deck = createdeck	
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
			 this.getHandTotal=function (hand){
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
			 this.hit= function (listOfPlayers,deck){
					var hand
					var index =	getCurrentPlayer(listOfPlayers)
					hand = listOfPlayers.playersArray[index].hand
					hand = hand.concat(draw(deck))
					hand.value = getHandTotal(hand)
					if (hand.value>22){
						if(listOfPlayers.playersArray[index].name==='dealer'){
								endGame(listOfPlayers)
						}
						else{
							changePlayers(listOfPlayers)
						}
					}
				listOfPlayers.playersArray[index].hand = hand	
				console.log(listOfPlayers.playersArray[index])
				return listOfPlayers
			}
        
          // takes a number and  returns a shuffled shoe with that many decks that many times *5
       function createDeck (num){  
              var blackjackDeck = new casino.Shoe(num)
              for (i=0; i<=num*5;i++){
                 blackjackDeck.shuffle(num)
              }
              return blackjackDeck
        }
          // takes a number and  returns that many  players hand plus a dealer
  	function  createPlayers(num){
                  //start the loop at one because thats how normal people count
                  var arrayOfPlayers = []
									for(var i=0;i<num;i++){
                     arrayOfPlayers = new casino.players() 
                    this.players.name= 'player'+ (i +1)
										arrayOfPlayers.push(arrayOfPlayers)
       
                  	
                 
                  
                //to acess the players its variablename[index]. and what you want
                return arrayOfPlayers
									}  
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
	this.createDealer=function (){
		var dealer = new casino.player()
		dealer.name='dealer'
		return dealer
	}
     
*/    
	}
	var module ={
	'game':game
	
    
	}
  return module


} )()

		
