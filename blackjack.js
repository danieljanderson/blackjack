//var DECK = require('./deck.js')
//deck is global so i can just pass in the players for the hit function.  

var blackjack = (function (num){
	var game = function (num){
		var DEALER_INDEX = -1
		var current_turn = 0
		var deck = createDeck(num)
		this.playerArray =  []
		
		// it takes a number calls the createPlayers method with a array of player objects the size of the numOfPlayers
		// calls createDealer method.
		// calls deal method cards to every player and the dealer
		// and then gets the grand total of the two cards they have
		this.startGame=function(numOfPlayers){
			this.playerArray = createPlayers(numOfPlayers)
			deal(this.playerArray) 
			this.dealer= createDealer()
			for (var i =0;i<this.playerArray.length;i++){
				this.playerArray[i].value=getHandTotal(this.playerArray[i].hand)
					}
		}
	//this is a helper function that deals two cards to one player 
		function deal(playerArray){
			for (var i = 0; i<playerArray.length;i++){
				for (var numCards = 0;numCards<2;numCards++){
					playerArray[i].recieveCard(deck.draw())	
				}
			}
		}
	
	// this is a helper function that creates a new instance of the player object and assigns it to the variable dealer	
		function createDealer(){
			var dealer = new casino.Player()
			dealer.name='dealer'
			for (var numCards = 0;numCards<2;numCards++){
				dealer.recieveCard(deck.draw())
			}
		return dealer
		}
	// this is a helper function that creates and returns a new instance of the shoe object.  it will then shuffle the shoe 5 times the number of decks that are in it	
		function createDeck (num){  
     	var blackjackDeck = new casino.Shoe(num)
       	 for ( var i=0; i <= (num*5) ;i++){
        		 blackjackDeck.shuffle()
         	}
    return blackjackDeck
      }
		//this is a helper function that returns an array of player objects that
		function  createPlayers(num){
     	var arrayOfPlayers = []
			for(var i=0;i<num;i++){
				var newPlayer = new casino.Player() 
        newPlayer.name= 'player'+ (i +1)
				arrayOfPlayers.push(newPlayer)
				}
		return arrayOfPlayers
									  
     }
		// this is a helper function.  it takes a hand and returns a integer.
		//it calculates the value of the players hand. if it is a hand that is over 21 and has aces it will then make the ace value of 1  
		function getHandTotal(hand){
    		var total = 0
				var ace_count = 0
				for (var j=0;j<hand.length;j++){
						isBust(total)
						isTwentyOne(hand)		
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
		// this is a helper function that changes the players.  it takes the players array and if their is a player to play they play.
		//if the last player has gone it makes the current turn -1 meaning that its the dealers turn
		function changePlayers (listOfPlayers){
				if (current_turn == listOfPlayers.length-1){
					current_turn=-1
				}
				else{
					current_turn++
				}
			}
	//this is a stay function.  it just changes the currrent turn meaning it changes players	
		this.stay= function(){
			current_turn++
		}	
	//hit is a function that gives the current player a card
	// it then will calculate the the current players total. 
	//it will check to see if they have 21.
	// it will then change players if the current players hand is greater than 21
		this.hit= function (){
			if (current_turn==-1){
				dealerGame(this.dealer)
				endGame(this.playerArray,this.dealer)
			}
			else{
				var player= this.playerArray[current_turn]		
				player.value=getHandTotal(player.hand)
				player.recieveCard(deck.draw())
				player.value=getHandTotal(player.hand)
					if (player.value>22) {
						changePlayers(this.playerArray)
					}
					
		}
		}
	// this checks to see if they have 21
		function isTwentyOne(hand){
			if(hand[0].value===10||11){
				if(hand[1].value===10||11){
					return true
				}
			}
		}
	//this function sees if a players score is over 21 and returns true or false	
		function isBust (score){
			if (score>21){
				return true
			}
			else{
		 		return false
			}
		}
	//this function takes a dealer object.  this will then give a dealer a card if they have 16 or less.  if its 17 the dealer will stay	
		function dealerGame(dealer){
			dealer.hand[0].flipOver=true
			dealer.value=getHandTotal(dealer.hand)
			while (dealer!==undefined){
				if (dealer.value<17){
					dealer.recieveCard(deck.draw())	
					dealer.value=getHandTotal(dealer.hand)
				}
				else if(dealer.value>=17){
				break
				}
				
			}
		}

		// this function will then compare the players scores and will then store the results in the playerArray object
		function endGame (playerArray,dealer){
			for (var i = 0; i<=playerArray.length-1;i++){
				if (isBust(dealer.value)){
					playerArray[i].results = ""+playerArray[i].name+' you win'
				}
				else if(isBust(playerArray[i].value)){
					playerArray[i].results =""+playerArray[i].name+' you busted you lose'
					console.log("you busted")
				}
				else if(playerArray[i].value>dealer.value){
					playerArray[i].results= " "+ playerArray[i].name+' you win'
				}
				else if(playerArray[i].value<dealer.value){
					playerArray[i].results= " "+ playerArray[i].name+' you lose'	
				}
				else{
					playerArray[i].results= " "+playerArray[i].name+' you push with the dealer'
				}
			}
				
	}

	}
	var module ={
	'game':game

    
	}
  return module


} )()
/*
QUESTIONS:
1.why is line 18 undefined. the error says Uncaught TypeError: Cannot read property 'hand' of undefined but line 17 creates the players just fine
i think it has to do with context.  this loses its context going into nested functions.  need help understand this an how to fix it
2.how is it that the playerArray[i].results is getting saved in the playerArray object.  ex if you do the follow in the command line:
var dan = new blackjack.game(8)
dan.startGame(1)
dan.hit() 
dan.hit()
and if you type in dan in the console it shows you that the results are.
3. how do i fix question 1.


*/

		
