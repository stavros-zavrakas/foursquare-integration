(function ($) {
  
  function Rest (opts) {
    this.opts = opts || {};
  }

  Rest.prototype.get = function() {
    var request = $.ajax({
      url: "script.php",
      method: "POST",
      data: { id : menuId },
      dataType: "html"
    });
     
    request.done(function( msg ) {
      $( "#log" ).html( msg );
    });
     
    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });
  };

  Rest.prototype.post = function() {

  };

  Rest.prototype.put = function() {

  };

  Rest.prototype.delete = function() {

  };

}(jQuery))