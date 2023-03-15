const dateInput = document.querySelector(".date-input");
const dateImage = document.createElement("img");
const dateTitle = document.querySelector(".date-title");
const dateDiscreption = document.querySelector(".date-discreption");
const generatedContent = document.querySelector(".generated-content");
dateInput.value = "2023-03-05";

function nasaRequest() {
  const xhr = new XMLHttpRequest();
  const url = `https://api.nasa.gov/planetary/apod?api_key=KPpPixIqS1RimkI6mOUVG7JRay6Fx0kUGhezQT6x&date=${dateInput.value}&`;
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let resposne = JSON.parse(xhr.responseText);
      console.log(resposne);
      dateTitle.textContent = resposne.title;
      dateDiscreption.textContent = resposne.explanation;
      dateImage.classList = "date-img";
      const imageSrc = resposne.url;
      dateImage.setAttribute("src", imageSrc);
      generatedContent.appendChild(dateImage);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}
nasaRequest();
dateInput.addEventListener("change", () => {
  nasaRequest();
});
