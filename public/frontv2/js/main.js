$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(500);
        $('.nav').removeClass('open');
    });
});