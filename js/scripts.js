$(function(){

  $(".container form").submit(function(event){
    var temp = $("input[name=optionsRadios]:checked").val(),
    tourist = $("input[name=optionsRadios2]:checked").val(),
    affordable = $("input[name=optionsRadios3]:checked").val(),
    fly = $("input[name=optionsRadios4]:checked").val(),
    usa = $("input[name=optionsRadios5]:checked").val();
    $(".daytona").hide();
    $(".cabo").hide();
    $(".sanDiego").hide();
    $(".baja").hide();

    if(temp === "yes"){
      if (tourist === "yes"){
        if (affordable === "yes"){
          if (fly === "yes"){
            if (usa === "yes"){
              $(".daytona").show();
            }else {
              $(".cabo").show();
            }
          }else if(usa === "yes"){
            $(".sanDiego").show();
          }else {
            $(".baja").show();
          }
        }else {
          $(".daytona").show();
        }
      }else {
        $(".daytona").show();
      }
    }else {
      $(".daytona").show();
    }
  event.preventDefault();
  })
});

$(function() {

  $('#resetButton').on('click', function() {
    $window.location.reload();
    $('img').remove();
  })
});
