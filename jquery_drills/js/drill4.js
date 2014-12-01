$(function(){

	// $('#first').hide();
	// $('#first ul').first().hide();
	$('#second ul li').first().hide();
	// $('#second').hide();
	$('#second ul .third ul li:nth-child(3)').hide();
	$('#first .first .first').hide();
	// $('#first').css({backgroundColor: 'red'});
	// $('#first ul:nth-child(2)').css({backgroundColor: 'red'});
	// $('ul li:nth-child(2)').css({backgroundColor: 'red'});
	// $('#second').delay(5000).fadeOut('slow');
	// $('ul li:first-child').detach();
	// $('#first .second:last-child').append('<li>Fourth item</li>');
	// $('#second ul li ul:last-child').append('<li> fourth item</li>');
	// $('#first ul:last-child').detach().appendTo('#second');
	// $('.stage').children().on('click', function() {
	// 	$(this).hide();
	// });
	// $('#first').children().on('click', function(){
	// 	$(this).hide();
	// })
	$('.stage').children().on('click', function() {
		$(this).delay(3000).fadeOut('slow');
	});
    console.log('The dom is ready! (drill 4)');




});

