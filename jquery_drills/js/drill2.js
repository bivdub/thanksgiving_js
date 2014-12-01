$(function(){


    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(e){
    	switch(e.which) {
    		case 37:
			if($('.shape').position().left > 0) {
				$('.shape').animate({left: '-=50px'}, 'slow');
			}
    		break;
    		case 38:
    		if($('.shape').position().top > 0) {
    			$('.shape').animate({top: '-=50px'}, 'slow');
    		}
    		break;
    		case 39:
    		if($('.shape').position().left < 800) {
    			$('.shape').animate({left: '+=50px'}, 'slow');
    		}
    		break;
    		case 40:
    		if($('.shape').position().top < 400) {
    			$('.shape').animate({top: '+=50px'}, 'slow');
    		}
    		break;
    		case 83:
    		$('.shape').animate({left: '-=5px'}, 'fast').animate({left: '+=5px'}, 'fast').animate({left: '-=5px'}, 'fast').animate({left: '+=5px'}, 'fast');
			break;
    	}
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
    });

});
