//var DECK = require('./deck.js')
//deck is global so i can just pass in the players for the hit function.  
var blackjack = (function (num){
	var game = function (num){
	var DEALER_INDEX = -1
	var current_turn = 0
	// had to make deck a global varable because the function hi wouldnt have acess to the deck variable other wise.
	var deck = createDeck(num)
	this.playerArray =  []
		

		this.startGame=function(numOfPlayers){
			this.playerArray = createPlayers(numOfPlayers)
		//	deck = createDeck(numOfDeck)	
			deal(this.playerArray) 
			this.dealer= createDealer()
		}
	function deal(playerArray){
	for (var i = 0; i<playerArray.length;i++){
		for (var numCards = 0;numCards<2;numCards++){
			playerArray[i].recieveCard(deck.draw())	
		}
	}
	}
	function createDealer(){
		var dealer = new casino.Player()
		dealer.name='dealer'
		for (var numCards = 0;numCards<2;numCards++){
					dealer.recieveCard(deck.draw())
		}
		return dealer
	}
	function createDeck (num){  
     var blackjackDeck = new casino.Shoe(num)
        for ( var i=0; i <= (num*5) ;i++){
        	 blackjackDeck.shuffle()
         }
      return blackjackDeck
        }
		function  createPlayers(num){
     	var arrayOfPlayers = []
			for(var i=0;i<num;i++){
				var newPlayer = new casino.Player() 
        newPlayer.name= 'player'+ (i +1)
				arrayOfPlayers.push(newPlayer)
				}
		return arrayOfPlayers
									  
     }
			function getHandTotal(hand){
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
			function changePlayers (listOfPlayers){
				if (current_turn == listOfPlayers.length-1){
					current_turn=-1
				}
				else{
					current_turn++
				}
			}
	this.stay= function(){
		current_turn++
	}	
	this.hit= function (){
		//toDo send player into get score function. 
		//toDo get high score function only takes a hand and returns a total.  
		//then then the hit function will see if its a bust
		// if bust then you change players
		//toDo create stay function that changes players
		//toDo create a change player function and in there make sure that you incrument through the current_turn index
		// in that function if its the length of the array make the index -1.
		//toDo create dealer game function. and then that will lead to the end of the game
		// create end of game function
		console.log(this.dealer)
	
		//All the old functions should work just need to adapt it
		//toDo create documentation in code for the whole program.
		if (current_turn==-1){
			dealerGame(this.dealer)
		}
		else{
		var player= this.playerArray[current_turn]		

		player.value=getHandTotal(player.hand)
		player.recieveCard(deck.draw())
		player.value=getHandTotal(player.hand)
			if (player.value>22 && current_turn==-1){
						endGame()
						}
			else if (player.value>22) {
						changePlayers(this.playerArray)
					}
					
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
			function dealerGame(dealer){
			
				dealer.hand[0].flipOver=true
				dealer.value=getHandTotal(dealer.hand)
				while (dealer!==undefined){
						if (dealer.value<17){
							dealer.recieveCard(deck.draw())	
							dealer.value=getHandTotal(dealer.hand)
					
						}
						else if(dealer.value>=17){
							endGame(dealer)
						}
				
				}
			}
		
			function endGame (dealer){
				//dealer works but not the playerArray.  
				console.log("the end game"+this.playerArray)
				//-2 because dealer will always be listOfPlayers.1
				for (var i = 0; i<=this.playerArray.length-1;i++){
						if (isBust(this.dealer.hand)){
							this.playerArray[i].results = ""+this.playerArray[i].name+'you win'
						}
						if(this.playerArray[i].value>this.dealer.value){
							this.playerArray[i].results= " "+ this.playerArray[i].name+'you win'
						}
						else if(this.playerArray[i].value<this.dealer.value){
						this.playerArray[i].results= " "+ this.playerArray[i].name+'you lose'	
						}
						else{
						this.playerArray[i].results= " "+this.playerArray[i].name+'you push with the dealer'
						}
				}
				
			}

	}
	var module ={
	'game':game
	
    
	}
  return module


} )()

		
