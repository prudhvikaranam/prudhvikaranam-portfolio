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
    "section"
  ).innerHTML += `<h1 id="heroHeader">${data.landing.heroName}</h1>
    <p id="heroSocial">${data.landing.socialIcons}</p>
    <p id="heroDescription">${data.landing.heroDescription}</p>
    <p id="heroContent">${data.landing.heroContent}</p>    
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
