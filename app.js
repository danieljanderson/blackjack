$(function(){
	//to do make a menu that has a button with - that will allow some one to go home go to the pet app or save game load game or quit game in blackjack
	//this menu will stay the same no matter the device.
		var userName = ''
		function setupGame(){
		var numberOfPlayers = 0
		var numberOfDecks = 0
			$('#New_Game').on('click',function(e){
				e.stopPropagation()
				//shows the ask username dialog box
				$('#user_name').toggle()
				//gets username from user when user presses enter.
				$('#user_name_form').keydown(function(e) {
					var key = e.which
					// ASCII code for enter
					if (key == 13) {
					// Submit form
						userName=$('.form-control').val()
						$('#user_name_form').submit()
						//closes the user name prompt 
						$('#user_name_form').toggle()
						//opens the player prompt.  this is where the user sets the number of players.  up to 7.  not including the dealer
						$('#Player_numbers').toggle()
						e.stopPropagation()
						$('.btn-primary').on('click',function(e){
								numberOfPlayers = $('#inlineFormCustomSelect').val()
								//makes number of players into an int
								numberOfPlayers=Number(numberOfPlayers)
								$('#inlineFormCustomSelect').submit()
								//closes the player prompt
								$('#Player_numbers').toggle()
								//opens the shoe prompt.  this is where the user determins how many decks are in the shoe.
								$('#number_of_decks').toggle()
								e.stopPropagation()
								$('#ShoeSize').keydown(function(e){
									var key = e.which	
									if(key ==13){
											numberOfDecks =$('#ShoeSize').val()
											//makes numberOfDecks into a ints
											numberOfDecks= Number(numberOfDecks)
											$('#ShoeSize').submit()
											$('#number_of_decks').toggle()
											e.stopPropagation()
											setupGameBoard(numberOfPlayers,numberOfDecks)
									}
								})	
					})
				}
		})
			

			
		})

	}
		function setupGameBoard(numPlayer,numDeck){
			var players = blackjack.getPlayer(numPlayer)
			var deck = blackjack.getDeck(numDeck)
			//blackjack.startGame(players,deck)
			//this appends a div tag to every player
			//inside the div it will display their names, totals, and cards
			for(var i =0;i<players.playersArray.length;i++){
				var playerNameHtml=('<div id ='+players.playersArray[i].name+'_container></div>')
				var playerDisplayName = ('<div class = playersName>'+players.playersArray[i].name+'</div>')
				$('#players_seat').prepend(playerNameHtml)
				$('#'+players.playersArray[i].name+'_container').append(playerDisplayName)	
			}
			gamePlay(players,deck)
		}
		function gamePlay(players,deck){
			blackjack.startGame(players,deck)
			//help for accessing different information on the player object
			console.log(players)
			for (var i = 0; i<players.playersArray.length;i++){
				//going through the players array
				// selecting the player at index i
				//then going through their hand
				for(var j = 0; j<players.playersArray[i].hand.length;j++){
				$('#'+players.playersArray[i].name+'_container').append(displayCards(players.playersArray[i].hand[j]))
				}		
			}
		}

		function generateButtons(){
		
	}
	function displayCards(card){
			if(card.flipOver){
				return'<img src='+card.image+' alt="card_image">'
				}
			else{
				return '<img src="image/b2fv.bmp" alt="back_of_card_image">'
			}
		
	}
	
	







	setupGame()
	generateButtons()	

})