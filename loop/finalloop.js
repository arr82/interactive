// onclick
function saveID(id) {
  if ($.cookie('idCookie')) {
    $.cookie('idCookie', $.cookie('idCookie') + "," + id);
  } else {
    $.cookie('idCookie', id);
  }
}

// make all links colored
function setVisted() {
  var idArray = $.cookie('idCookie').split(',');
  for (var x=0; x<idArray.length; x++) {
    $('#' + idArray[x]).css('color', '#ff0000');
  }
}

// assign saveID()
$(document).ready(function(){
  $('a').click(function(){
    saveId($(this).attr('id'));
  });
  setVisited();
});


$("#section60").click(
  function () {
     var newDiv = $("<div>").append(finalloop.HTML).click(function () { alert("click!"); });
     $(this).append(newDiv);
  }
)

$("#section1").click(
  function () {
     var newDiv = $("<div>").append(finalloop.HTML).click(function () { alert("click!"); });
     $(this).preppend(newDiv);
  }
)
