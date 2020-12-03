$(document).on('change', '.dino-selector', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
  });
  $(document).ready(function(){
      $('.dino-selector').trigger('change');
  });