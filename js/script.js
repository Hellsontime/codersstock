$(document).ready(function(){
   $("#header").removeClass("default");
   $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
     $("#header").addClass("default").fadeIn('fast');
    } else {
     $("#header").removeClass("default").fadeIn('fast');
    };
   });

   $('a[href^="#"]').click(function () { 
       elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
    $('body').animate( { scrollTop: destination }, 1000 );
    } else {
        $('html').animate( { scrollTop: destination }, 1000 );
    }
    return false;
     });
  });﻿

var options = {
  offset: 700
}

var header = new Headhesive('.heading', options);