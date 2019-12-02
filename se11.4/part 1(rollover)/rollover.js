$(document).ready(function(e) {
    $("h2").hover(function(){
        var id = "#" + $(this).parent().attr("id") +' p';
        $(id).show();
    },function(){
        var id = "#" + $(this).parent().attr("id") +' p';
        $(id).hide();
    });
}); // end ready