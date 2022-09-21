$(function(){


    var now = 1;
    var max = 6;
    var w = 372;
    var slide_3;
    
    slide_3 = setInterval(function(){
    
    $('#slide_3 .container_3 > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide_3 .container_3').append($('#slide_3 .container_3 > div:nth-child(1)'));
    $('#slide_3 .container_3 > div:nth-child(6)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });
