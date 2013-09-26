$(function () {
  var displayDatepicker = function (callback) {
    var input = $('.search_facet.is_editing input.search_facet_input')

    var removeDatepicker = function () {
      input.datepicker("destroy")
    }

    // Put a selected date into the VS autocomplete and trigger click
    var setVisualSearch = function (date) {
      removeDatepicker()
      callback([date])
      $("ul.VS-interface:visible li.ui-menu-item a:first").click()
    }

    input.datepicker({
      dateFormat: 'yy-mm-dd',
      onSelect: setVisualSearch,
      onClose: removeDatepicker
    })
    input.datepicker('show')
  }

  VS.init({
    remainder : null,
    container : $('.visual_search'),
    query     : '',
    unquotable: ['day', 'date'],
    callbacks : {
      facetMatches: function(callback) {
        callback(['day', 'date'])
      },
      valueMatches: function(facet, searchTerm, callback) {
        if (facet == 'day')
          callback(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], { preserveOrder: true })
        else if (facet == 'date')
          setTimeout(function () { displayDatepicker(callback) }, 0)
      }
    }
  })
})
