// @codekit-prepend "libs/jquery-2.2.3.min.js"

$(document).ready(function() {

    // Nav is shown by default, only close if JS loaded
    $('.nav').hide();

    // Manipulate the nav bar
    $('a.nav-open-close').click( function() {
        var txt = $('.nav').is(':visible') ?  '— Menu —' : '— Close Menu —';
        $('a.nav-open-close').text(txt);
        $('.nav').slideToggle('fast', 'linear');
        $(this).toggleClass('nav-open-close-is-active');
        return false;
    });

});
