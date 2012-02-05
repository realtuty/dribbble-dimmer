// add UI elements
$('body').prepend('<div id="dd-mask"></div>');
$('#single-img').append('<a href="#" id="dd-toggle"></a>');
$('#dd-toggle').hide();

// observe shot mouseovers, show toggle link
$('#single-img').hover(
  function() {
    $('#dd-toggle').fadeIn('fast');  
  },
  function() {
    $('#dd-toggle').fadeOut('fast');  
  }   
);

// observe toggle mouseovers
$('#dd-toggle').click(function(e) {
  e.preventDefault();
  if ($('#dd-mask').is(':visible')) {
    $('#dd-mask').fadeOut('fast');  
  }
  else {
    $('#dd-mask').fadeIn('fast');  
  }
});