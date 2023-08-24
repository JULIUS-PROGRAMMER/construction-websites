$(document).ready(function(){
    $("#menu").click(function(){
       $(".nav-links").toggleClass("active");
       $("#menu").toggleClass("fa-times");
    });          
});