function mutateLabelText() {
  $('.y-label.product-link').each(function() {
    var new_text = $(this).text().replace("On ", ""); 
    $(this).text(new_text);
  });
}

function watchForYotpoChanges() {
  var checkExistInterval = setInterval(function() {
    setTimeout(function() {
      var yotpoPage = $('.yotpo-pager');
      var productLabel = $('.y-label.product-link');
      if (productLabel.length) {
        mutateLabelText();
        yotpoPage.on('click', function(e) {
          watchForYotpoChanges()
        });
        clearInterval(checkExistInterval);
      }
    }, 200)
  })
}

watchForYotpoChanges()
