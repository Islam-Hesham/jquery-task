var mess = document.getElementById("messagelimit");



function Validate() {
    var messcheck = /^[a-z][A-Z]{100}$/;
    if (messcheck.match(mess.value)) {
        return true;
    } else {
        alert("not pattern");
        return false;
    }
   
   
}


// Set the date we're counting down to
    var countDownDate = new Date("Mar 31, 2023").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result 
        document.getElementById("days").innerHTML = days + "d ";
        document.getElementById("hours").innerHTML =  hours + "h ";
        document.getElementById("minutes").innerHTML = minutes + "m ";
        document.getElementById("seconds").innerHTML = seconds + "s ";
        
        
        
       
   

    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);





function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}




(function ($) {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').click(function () {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

})(jQuery);