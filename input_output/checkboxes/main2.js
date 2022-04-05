var images = [
  "img/slug1.jpg","img/slug2.jpg","img/slug3.jpg","img/slug4.jpg","img/slug5.jpg","img/slug6.jpg","img/slug7.jpg","img/slug8.jpg","img/slug9.jpg","img/slug10.jpg","img/slug11.jpg","img/slug12.jpg","img/slug13.jpg","img/slug14.jpg","img/slug15.jpg","img/slug16.jpg","img/slug17.jpg",
  "img/slug18.jpg","img/slug19.jpg","img/slug20.jpg","img/slug21.jpg","img/slug22.jpg","img/slug23.jpg","img/slug24.jpg","img/slug25.jpg","img/slug26.jpg","img/slug27.jpg","img/slug28.jpg","img/slug29.jpg","img/slug30.jpg","img/slug31.jpg","img/slug32.jpg","img/slug33.jpg","img/slug34.jpg","img/slug35.jpg","img/slug3.j6pg",
  "img/slug37.jpg","img/slug38.jpg","img/slug39.jpg","img/slug40.jpg","img/slug41.jpg","img/slug42.jpg","img/slug43.jpg","img/slug44.jpg","img/slug45.jpg","img/slug46.jpg","img/slug47.jpg","img/slug48.jpg","img/slug49.jpg","img/slug50.jpg","img/slug51.jpg","img/slug52.jpg","img/slug53.jpg","img/slug54.jpg","img/slug55.jpg",
  "img/slug56.jpg","img/slug57.jpg","img/slug58.jpg","img/slug59.jpg","img/slug60.jpg","img/slug61.jpg","img/slug62.jpg","img/slug63.jpg","img/slug64.jpg"
];

var range = images.length;

$("button").click(function(){
  var index = Math.floor(Math.random() * range);
  var image_src = images[index];
  var image = document.createElement("img");
  console.log(image_src);
  //image.src = image_sr;
  $('body').css("background-image", "url(" + image_src + ")");

});
