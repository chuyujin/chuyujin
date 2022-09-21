$(function(){


    var now = 1;
    var max = 6;
    var w = 372;
    var slide_4;
    
    slide_4 = setInterval(function(){
    
    $('#slide_4 .container_4 > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide_4 .container_4').append($('#slide_4 .container_4 > div:nth-child(1)'));
    $('#slide_4 .container_4 > div:nth-child(6)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });
