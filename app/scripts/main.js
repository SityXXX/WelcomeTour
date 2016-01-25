
$(document).ready(function(){

  $('#language').selectpicker({

    width: 'fit'

  });

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

  var lang = $('html').attr('lang');

  $('.input-daterange').datepicker({

    language: lang,
    orientation: 'right bottom'

  });

});
