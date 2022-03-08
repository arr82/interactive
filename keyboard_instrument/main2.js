// this is where you write your javascript

$(window).keydown(function(e){

  var key = e.key;

  console.log(key);

  if (key == "a") {
    $("body").append("<img src='../images/keya.png' class='A' alt=''>");
  }
  else if (key == "b") {
    $("body").append("<img src='../images/keyb.png' class='B' alt=''>");
  }
  else if (key == "c") {
    $("body").append("<img src='../images/keyc.png' class='C' alt=''>");
  }
  else if (key == "d") {
    $("body").append("<img src='../images/keyd.png' class='D' alt=''>");
  }
  else if (key == "e") {
    $("body").append("<img src='../images/keye.png' class='E' alt=''>");
  }
  else if (key == "f") {
    $("body").append("<img src='../images/keyf.png' class='F' alt=''>");
  }
  else if (key == "g") {
    $("body").append("<img src='../images/keyg.png' class='G' alt=''>");
  }
  else if (key == "h") {
    $("body").append("<img src='../images/keyh.png' class='H' alt=''>");
  }
  else if (key == "i") {
    $("body").append("<img src='../images/keyi.png' class='I' alt=''>");
  }
  else if (key == "j") {
    $("body").append("<img src='../images/keyj.png' class='J' alt=''>");
  }
  else if (key == "k") {
    $("body").append("<img src='../images/keyk.png' class='K' alt=''>");
  }
  else if (key == "l") {
    $("body").append("<img src='../images/keyl.gif' class='L' alt=''>");
  }
  else if (key == "m") {
    $("body").append("<img src='../images/keym.png' class='M' alt=''>");
  }
  else if (key == "n") {
    $("body").append("<img src='../images/keyn.png' class='N' alt=''>");
  }
  else if (key == "o") {
    $("body").append("<img src='../images/keyo.png' class='O' alt=''>");
  }
  else if (key == "p") {
    $("body").append("<img src='../images/keyp.png' class='P' alt=''>");
  }
  else if (key == "q") {
    $("body").append("<img src='../images/keyq.png' class='Q' alt=''>");
  }
  else if (key == "r") {
  $("body").append("<img src='../images/keyq.png' class='Q' alt=''>");
  }
  else if (key == "s") {
    $("body").append("<img src='../images/keys.png' class='S' alt=''>");
  }
  else if (key == "t") {
    $("body").append("<img src='../images/keyt.png' class='T' alt=''>");
  }
  else if (key == "u") {
    $("body").append("<img src='../images/keyu.png' class='U' alt=''>");
  }
  else if (key == "v") {
    $("body").append("<img src='../images/keyv.png' class='V' alt=''>");
  }
  else if (key == "w") {
    $("body").append("<img src='../images/keyw.png' class='W' alt=''>");
  }
  else if (key == "x") {
    $("body").append("<img src='../images/keyx.png' class='X' alt=''>");
  }
  else if (key == "y") {
    $("body").append("<img src='../images/keyy.png' class='Y' alt=''>");
  }
  else if (key == "z") {
    $("body").append("<img src='../images/keyz.png' class='Z' alt=''>");
  }
  else if (key == "Backspace") {
  $("body").children().last().remove();
  }
  else if (key == "") {
  $("body").append("<div class='space'> </div>");
  }




});
