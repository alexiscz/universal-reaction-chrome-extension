
// Search the bookmarks when entering the search keyword.

(function() {
  var items = '';
  for (let item of window.config) {
    items += '<div class="button"><a href="#" class="sound" data-sound="' + item["file"] + '"><img src="' + item["img"] + '" /></a></div>';
  }
  document.body.innerHTML = items;

  let buttons = document.getElementsByClassName('sound');
  for (let button of buttons) {
    button.addEventListener('click', event => {
      var sound = event.currentTarget.getAttribute('data-sound');
      new Audio(sound).play()
    })
  }
})();
