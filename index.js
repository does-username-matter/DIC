$(document).ready(function(){
  $(".jqq").mouseover(function(){
    $(".jqq").animate({
          "font-size": "2em"
    });
  });

  $(".jqq").mouseout(function(){
    $(".jqq").animate({
          "font-size": "1.75em"
    });
  });

});

$(document).ready(function(){
    $(".title").animate({
        'font-size' : '4.5rem',
        'opacity': '1'
    },1000);
});





$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
