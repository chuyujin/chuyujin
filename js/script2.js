$(function(){

    var now = 1;
    var max = 8;
    var h = 500;
    var slide;
    
    slide = setInterval(function(){
    
    $('.notice_list > li:nth-child(1)').animate({'margin-top':(h*(-1))+'px'},300,
    function(){
    $('.notice_list').append($('.notice_list > li:nth-child(1)'));
    $('.notice_list > li:nth-child(8)').css('margin-top','0px');
    
    
    });
    
    }, 2500);
    
    
    });
   