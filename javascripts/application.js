$(function () {
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
          callback([searchTerm])
      }
    }
  })
})
