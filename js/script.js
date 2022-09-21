$(function () {


    var now = 1;
    var max = 7;
    var h = 500;
    var slide;

    slide = setInterval(function () {

        $('#slide .container > div:nth-child(1)').animate({ 'margin-top': (h * (-1)) + 'px' }, 300,
            function () {
                $('#slide .container').append($('#slide .container > div:nth-child(1)'));
                $('#slide .container > div:nth-child(7)').css('margin-top', '0px');
                

            });

    }, 2500);


});


// 스크롤 다운
$( 'html, body' ).stop().animate( { scrollTop : 950 } )

// 
// 스크롤 업
$( 'html, body' ).stop().animate( { scrollTop : 0 } )
// 





