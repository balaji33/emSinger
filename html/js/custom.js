$("#exampleModal").on('hidden.bs.modal', function (e) {
  $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
  } else {
    document.getElementById("header-nav").style.top = "-45px";
  }
  prevScrollpos = currentScrollPos;
};


$(document).ready(function() {
  $('#contentshow').click(function() {
          $('.content-click').slideToggle();
  });
});

$('#close-btn').click(function () {
  $('#hidecontent').hide();
})




