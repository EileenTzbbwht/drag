$(function(){   

 $(".count_area").keyup(function(){       
     var area_len = $(".count_area").val().length;
     $(".current_words").html(area_len);
     
  });
});  