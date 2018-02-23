$(function(){
	//to do make a menu that has a button with - that will allow some one to go home go to the pet app or save game load game or quit game in blackjack
	//this menu will stay the same no matter the device.
		var userName = ''
		function setupGame(){
		var numberOfPlayers = 0
		var numberOfDecks = 0
			$('#New_Game').on('click',function(e){
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
						console.log(userName)
						//closes the user name prompt 
						$('#user_name_form').toggle()
						//opens the player prompt.  this is where the user sets the number of players.  up to 7.  not including the dealer
						$('#Player_numbers').toggle()
						$('.btn-primary').on('click',function(e){
								numberOfPlayers = $('#inlineFormCustomSelect').val()
								$('#inlineFormCustomSelect').submit()
								console.log(numberOfPlayers)
								//closes the player prompt
								$('#Player_numbers').toggle()
								//opens the shoe prompt.  this is where the user determins how many decks are in the shoe.
								$('#number_of_decks').toggle()
								$('#ShoeSize').keydown(function(e){
									var key = e.which	
									if(key ==13){
											numberOfDecks =$('#ShoeSize').val()
											numberOfDecks= Number(numberOfDecks)
											$('#ShoeSize').submit()
											$('#number_of_decks').toggle()
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
			blackjack.startGame(players,deck)
			//this appends a div tag to every player
			for(var i =0;i<players.playersArray.length;i++){
			console.log(i)
			//var playerNameHtml=('<div id =players.playersArray[i].name></div>')
			var playerNameHtml = '<div id = "hi"></div>'
			$('#players').prepend(playerNameHtml)
			}
		}
	function gamePlay(){
		
	}
	function generateButtons(){
		
	}
	
	
	







setupGame()
gamePlay()
generateButtons()	

})