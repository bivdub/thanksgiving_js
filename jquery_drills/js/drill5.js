$(function(){

    var selector = undefined;

    $('#whoDo').on('input', function () {
        var temp = $(this).val();
        switch(temp) {
            case 'even':
            selector = $('.shape:even');
            break;
            case 'odd':
            selector = $('.shape:odd');
            break;
            case 'square':
            selector = $('.shape:not(.ball)');
            break;
            case 'circle':
            selector = $('.ball');
            break;
            case 'blue':
            selector = $('div:has(css({background: "blue"}))');
            break;
            case 'red':
            selector = $('div:has(css({background: "red"}))');
            break;
            case 'purple':
            selector = $('div:has(css({background: "purple"}))');
            break;
            case 'orange':
            selector = $('div:has(css({background: "orange"}))');
            break;
            case 'yellow':
            selector = $('div:has(css({background: "yellow"}))');
            break;
        }        

    });

    $('#doIt').on('click', function(){
        var temp2 = $('#whatDo').val();
        switch (temp2) {
            case 'blue':
            selector.css({background: 'blue'});
            break;
            case 'red':
            selector.css({background: 'red'});
            break;
            case 'purple':
            selector.css({background: 'purple'});
            break;
            case 'orange':
            selector.css({background: 'orange'});
            break;
            case 'yellow':
            selector.css({background: 'yellow'});
            break;
            case 'square':
            selector.removeClass('ball');
            break;
            case 'circle':
            selector.addClass('ball');
            break;
            case 'fadeout':
            selector.fadeOut('slow');
            break;
            case 'fadein':
            selector.fadeIn('slow');
            break;
        }
    })

    console.log('The dom is ready! (drill 5)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);

});




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

