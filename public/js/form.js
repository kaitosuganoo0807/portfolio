$(function() {
  $('#form').submit(function(){
      $.ajax({
          url: $('#form').attr('action'),
          data: $('#form').serialize(),
          type: 'POST',
          dataType: 'json',
          statusCode: {
              0: function() {
                  //成功した際の処理を書きます。
              },
              200: function() {
                  //成功した際の処理を書きます。
              }
          }
      });
      return false;
  });
});