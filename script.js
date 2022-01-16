var item = document.getElementById("body"); // For horizontal scroll
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) item.scrollLeft += 50;
  else item.scrollLeft -= 100;
});

// For loading data from file
let fetchData = fetch("./assets/data.json");
fetchData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loadIntoHtml(data);
  });

function loadIntoHtml(data) {
  document.getElementById(
    "lander"
  ).innerHTML += `<h1 id="heroHeader">${data.landing.heroName}</h1>
    <p id="heroDescription">${data.landing.heroDescription}</p>
    <p id="heroContent">${data.landing.heroContent}</p>
    <p><button  id="moreAboutButton">More About Me &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
    `;
}

/* Get the element you want displayed in fullscreen */
var elem = document.getElementById("resume");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

// For navigating to the section when clicked on the option

var navigations = Array.from(document.getElementsByClassName("navigator"));
navigations.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    navigations.forEach((data) => {
      data.classList.remove("active");
    });
    element.classList.add("active");
    let selectedKey;
    if (e.target.innerHTML != "") {
      selectedKey = e.target.innerHTML;
    } else {
      selectedKey = e.target.className;
      e.target.className = "";
    }
    document.getElementById(selectedKey).scrollIntoView({ behavior: "smooth" });
  });
});
