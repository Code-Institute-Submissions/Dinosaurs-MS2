
// Function to show the dinosaur information and picture when the dino selector is changed
$(document).on('change', '.dino-selector', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).addClass('hide');
    $(show).removeClass('hide');
  });
  $(document).ready(function(){
      $('.dino-selector').trigger('change');
  });