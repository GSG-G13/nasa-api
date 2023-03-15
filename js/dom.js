function dom(data) {
  for (let i = 0; i < 6; i++) {
    const cardContainer = document.querySelector(".events-container");
    const eventsItem = document.createElement("div");
    eventsItem.classList.add("events-items");
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    const eventImg = document.createElement("img");
    eventImg.classList.add("event-img");
    const eventDetails = document.createElement("div");
    eventDetails.classList.add("event-details");
    const eventTitle = document.createElement("h3");
    eventTitle.classList.add("event-title");
    const eventPar = document.createElement("p");
    eventPar.classList.add("event-description");
    eventsItem.append(eventImg);
    eventDetails.append(eventTitle);
    eventDetails.append(eventPar);
    eventsItem.append(eventDetails);
    cardContainer.append(eventsItem);
    eventPar.textContent = data[i].details;
    eventTitle.textContent = data[i].name;
    eventImg.src = data[i].links.patch.small;
  }
}

let url1 = `https://api.spacexdata.com/v4/launches/`;
function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
      let response = JSON.parse(xhr.responseText);
      console.log(response);
      cb(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
fetch(url1, dom);
