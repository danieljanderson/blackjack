$(function(){
	$('.dropdown-submenu').on("click", function(e){
   $('.dropdown-menu').toggle()
    e.stopPropagation();
    e.preventDefault();
  });
	$('html').on("click",function (e){
		$('.dropdown-menu').hide()
	})
	
	
	
	
	
	









})