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
    $(".miami").hide();
    $(".fiji").hide();
    $(".tulum").hide();
    $(".manzanillo").hide();
    $(".rarotonga").hide();
    $(".palm").hide();
    $(".crazy").hide();

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
        }else if(fly === "yes"){
          if(usa === "yes"){
            $(".miami").show();
          }else{
            $(".fiji").show();
          }
        }else if (usa === "yes") {
          $(".miami").show();
        }else {
          $(".cabo").show();
        }
      }else if (affordable === "yes") {
        if(fly === "yes"){
          if (usa === "yes") {
            $(".sanDiego").show();
          }else{
            $(".tulum").show();
          }
        }else if (usa === "yes"){
          $(".sanDiego").show();
        }else {
          $(".manzanillo").show();
        }
      }else if (fly === "yes"){
        if (usa === "yes") {
          $(".sanDiego").show();
        }else {
          $(".rarotonga").show();
        }
      }else if (usa === "yes"){
        $(".palm").show();
      }else {
        $(".baja").show();
      }
    }else {
      $(".crazy").show();
    }
  event.preventDefault();
  })
});

$(function() {

  $('#resetButton').on('click', function() {
    location.reload();
    $('img').remove();
  })
});
