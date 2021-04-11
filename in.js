var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

  sideNav.style.right = "-220px";
menuBtn.onclick = function () {
  if (sideNav.style.right == "-220px") {
    sideNav.style.right = "0";
  }else {
      sideNav.style.right = "-220px";
  }
}
