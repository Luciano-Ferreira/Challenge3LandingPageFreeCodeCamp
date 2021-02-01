// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = 'product-landing-page';

function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}