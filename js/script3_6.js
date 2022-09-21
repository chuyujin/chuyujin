$(function(){


    var now = 1;
    var max = 8;
    var w = 372;
    var slide_6;
    
    slide_6 = setInterval(function(){
    
    $('#slide_6 .container_6 > div:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},300,
    function(){
        $('#slide_6 .container_6').append($('#slide_6 .container_6 > div:nth-child(1)'));
    $('#slide_6 .container_6 > div:nth-child(8)').css('margin-left','0px');
   
    
    });
    
    }, 2500);
    
    
    });
