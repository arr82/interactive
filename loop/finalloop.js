// onclick
function saveID(id) {
  if ($.cookie('idCookie')) {
    $.cookie('idCookie', $.cookie('idCookie') + "," + id);
  } else {
    $.cookie('idCookie', id);
  }
}
