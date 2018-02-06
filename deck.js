var newDeck = (function(){
    var deck = function (){ 
    var SUITS = ['Clubs','Diamands','Hearts','Spades']
    var ORDER_VALUE = ['Ace','1','2','3','4','5','6','7','8','9','10','Jack','Qeen','King']
    // card is an object
    this.card = {
  suit :'',
  order_value:'',
  image:'',
  flip_over:true 
}
this.createDeck = function(card){
   this.card_array=[]
  for (i=0;i<SUITS.length-1;i++){
    for(j=0; j<ORDER_VALUE.length;j++){
      var tempCard={}
      tempCard.suit=SUITS[i]
      tempCard.order_value=ORDER_VALUE[j]
      tempCard.image='image/'+tempCard.suit+tempCard.order_value
      tempCard.flip_over=true
      this.card_array.push(tempCard)
   
    }
  }
  
 return this.card_array
}

//array.splice(index,how mmany,item1,another item, and last item)
//index is required

deck.prototype.shuffle = function(){

   
 //this.card_array.splice(Math.floor(Math.random()*this.card_array.lenth-1),0,temp)
  
}
 }
 var test = function(){
 var tempdeck = new deck()
 tempdeck.createDeck()
  console.log("new deck")
  console.log(tempdeck.card_array)
  console.log("shuffle deck")
  tempdeck.shuffle()
  console.log(tempdeck.card_array)
 }
 test()
})
newDeck()