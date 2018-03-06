casino.Shoe =

	(function(num){
	function Shoe(num){
				this.Shoe = []
				for ( var i= 0; i<num;i++){
				
					var tempDeck =new casino.Deck()
					this.Shoe= this.Shoe.concat(tempDeck.cards)
				}
				this.shuffle = function (){
        	var randomizedDeck = []
        	while (this.Shoe.length!==0){
            var rIndex= Math.floor(this.Shoe.length * Math.random())
            randomizedDeck.push(this.Shoe[rIndex])
             this.Shoe.splice(rIndex,1)
        	}
         this.Shoe = randomizedDeck
				}
				this.draw= function(){
					return this.Shoe.splice(0,1)
				}
		}

	return Shoe	})()
