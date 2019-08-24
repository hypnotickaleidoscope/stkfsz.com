$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#proj_view_spa_vue').offset().top-350;
    var scroll_pos_bot = $('#proj_view_spa_vue').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#proj_view_spa_vue" ).addClass( "proj_bg_scrl" );
    } else {
      $( "#proj_view_spa_vue" ).removeClass( "proj_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#proj_view_iot_sens').offset().top-350;
    var scroll_pos_bot = $('#proj_view_iot_sens').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#proj_view_iot_sens" ).addClass( "proj_bg_scrl" );
    } else {
      $( "#proj_view_iot_sens" ).removeClass( "proj_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#proj_view_xcp_homelab').offset().top-350;
    var scroll_pos_bot = $('#proj_view_xcp_homelab').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#proj_view_xcp_homelab" ).addClass( "proj_bg_scrl" );
    } else {
      $( "#proj_view_xcp_homelab" ).removeClass( "proj_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#about').offset().top-200;
    var scroll_pos_bot = $('#about').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#about" ).addClass( "section_bg_scrl" );
    } else {
      $( "#about" ).removeClass( "section_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#skills').offset().top-350;
    var scroll_pos_bot = $('#skills').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#skills" ).addClass( "section_bg_scrl" );
    } else {
      $( "#skills" ).removeClass( "section_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#education').offset().top-350;
    var scroll_pos_bot = $('#education').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#education" ).addClass( "section_bg_scrl" );
    } else {
      $( "#education" ).removeClass( "section_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#projects').offset().top-350;
    var scroll_pos_bot = $('#projects').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#projects" ).addClass( "section_bg_scrl" );
    } else {
      $( "#projects" ).removeClass( "section_bg_scrl" );
    }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#contact').offset().top-350;
    var scroll_pos_bot = $('#contact').offset().bottom;

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $( "#contact" ).addClass( "section_bg_scrl" );
    } else {
      $( "#contact" ).removeClass( "section_bg_scrl" );
    }
});
