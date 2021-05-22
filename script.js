var item = document.getElementById("body");
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) item.scrollLeft += 300;
  else item.scrollLeft -= 100;
});

let fetchData = fetch("./assets/data.json");
fetchData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loadIntoHtml(data);
  });

function loadIntoHtml(data) {
  console.log("documentContent", data.landing.socialIcons);
  document.getElementById(
    "lander"
  ).innerHTML += `<h1 id="heroHeader">${data.landing.heroName}</h1>
    <p id="heroDescription">${data.landing.heroDescription}</p>
    <p id="heroContent">${data.landing.heroContent}</p>
    <p id="heroSocial">${data.landing.socialIcons}</p>
    <p><button  id="moreAboutButton">More About Me <i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
    `;
}

function myFunction(e) {
  console.log(e);
  let selectedKey;
  if(e.target.innerHTML != ''){
    selectedKey = e.target.innerHTML;
  }else{
    selectedKey = e.target.className;
  }
  document.getElementById(selectedKey).scrollIntoView({ behavior: "smooth" });
}


/* Get the element you want displayed in fullscreen */ 
var elem = document.getElementById("resume");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}