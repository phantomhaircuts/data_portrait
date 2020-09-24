window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header").style.height = "100px";
    document.querySelector("header").style.fontSize = "30px";
    document.querySelector(".creditz").style.display = "none";
  } else {
    document.getElementById("header").style.height = "100vh";
    document.querySelector("header").style.fontSize = "100px"
    document.querySelector(".creditz").style.display = "block";
  }
}