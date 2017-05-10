
// Search the bookmarks when entering the search keyword.

$(function() {

  $.getJSON( "configs.json", function( data ) {
    console.log("here");
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<div class='button'><a href='#' class='sound' id='sound-"+key+"' data-sound='"+val["file"]+"'><img src='"+val["img"]+"' /></a></div>" );
    });
    $('#main').append(items);
    $('.sound').click(function(event) {
      var sound = $(event.currentTarget).data("sound");
      console.log(sound);
      new Audio(sound).play()
    });
  });
    
});