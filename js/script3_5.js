$(function(){


    var now = 1;
    var max = 7;
    var w = 372;
    var slide_5;
    
    slide_5 = setInterval(function(){
    
    $('#slide_5 .container_5 > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide_5 .container_5').append($('#slide_5 .container_5 > div:nth-child(1)'));
    $('#slide_5 .container_5 > div:nth-child(7)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });
