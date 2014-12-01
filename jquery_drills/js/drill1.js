$(function(){

	$('.ball').on('click', function () {
		$(this).fadeOut('slow', function () {
		$(this).css( {left: Math.floor(Math.random() * 800) + 'px' , top: Math.floor(Math.random() * 400) + 'px' });
		});
		$(this).fadeIn('slow');
		});
    console.log('The dom is ready! (drill 1)');


});

