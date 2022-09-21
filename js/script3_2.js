$(function(){


    var now = 1;
    var max = 7;
    var w = 372;
    var slide_2;
    
    slide_2 = setInterval(function(){
    
    $('#slide_2 .container_2 > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide_2 .container_2').append($('#slide_2 .container_2 > div:nth-child(1)'));
    $('#slide_2 .container_2 > div:nth-child(7)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });
