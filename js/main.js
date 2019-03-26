$( document ).ready(function() {
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });
});