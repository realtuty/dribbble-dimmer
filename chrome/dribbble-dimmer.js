// add UI elements
$('body').prepend('<div id="dd-mask"></div>');
$('#single-img').append('<a href="#" id="dd-toggle"></a>');

// observe toggle mouseovers
$('#dd-toggle').hover(
  function(e) {
    $('#dd-mask').fadeIn('fast');
  },
  function(e) {
    $('#dd-mask').fadeOut('fast');
  }
);