$(function(){
	$( '.shape' ).hover(function(){
		$(this).removeClass('ball');
		$(this).css({backgroundColor: 'rgba('+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+', 1)'});
	}, function(){
		$(this).addClass('ball');
	})

    console.log('The dom is ready! (drill 3)');
    

});

