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
  document.getElementById("landingSection").innerHTML +=
    `<h1 id="heroHeader">${data.landing.heroName}</h1>
    <p id="heroSocial">${data.landing.socialIcons}</p>
    <p id="heroDescription">${data.landing.heroDescription}</p>
    <p id="heroContent">${data.landing.heroContent}</p>    
    `;
}