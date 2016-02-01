
$(document).ready(function(){

  // Laguage dropdown
  $('#language').selectpicker({
    width: 'fit'
  });

  // Input mask
  $('#mobile').inputmask('+99 9(99) 999-99-99');
  $('#email').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });

  // Date range
  var lang = $('html').attr('lang');

  $('.input-daterange').datepicker({

    language: lang,
    orientation: 'right bottom'

  });

  // Booking modal
  $('.btn--booking').on('click', function(event){

    event.preventDefault();
    var tour = this.closest('.tour');
    var src = $(tour).find('.tour__img').attr('src');
    var tourName = $(tour).find('.tour__name a').text();
    var price = $(tour).find('.tour__price').text();
    var stars = $(tour).find('.tour__prestige');

    console.log(src);
    $('#reserve-modal').modal();

  });

});
