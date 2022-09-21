$(function(){


    var now = 1;
    var max = 7;
    var w = 372;
    var slide;
    
    slide = setInterval(function(){
    
    $('#slide .container > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide .container').append($('#slide .container > div:nth-child(1)'));
    $('#slide .container > div:nth-child(7)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });