$(function(){

  $('#fire-ajax').on('click', function() {
    $.ajax({
        crossDomain: False,

        method: GET,
        url: 'http://monsters-api.herokuapp.com/monsters',
        //Data: _____,
        Datatypes: 'html'
      }).done(function(){

      })
    })
})
