function addLeadingZero(value) {
    if (value < 10) {
      return `0${value}`;
    }
    else {return value};
}

function currentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const formattedDate = `${dayOfWeek}, ${month} ${addLeadingZero(dayOfMonth)}, ${year}`;
    document.getElementById("box_unten_eins").innerHTML = formattedDate;
}   

function currentTime() {
    const now = new Date();
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());
    const totalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("box_unten_zwei").innerHTML = totalTime;
}

function timeOnPage() {
  const currentTime = Date.now();
  if (!window.startTime) {
    window.startTime = currentTime;
  }
  const zeitdifferenz = new Date(currentTime - window.startTime);
  let stunden = zeitdifferenz.getUTCHours();
  let minuten = zeitdifferenz.getUTCMinutes();
  let sekunden = zeitdifferenz.getUTCSeconds();
 
  alert(
    `Your are ${addLeadingZero(stunden)} hours, ${addLeadingZero(
      minuten
    )} minutes and ${addLeadingZero(sekunden)} seconds on this page`
  );
}

window.addEventListener("beforeunload", function () {
  window.startTime = undefined;
});

function refresh() {
  window.location.reload();
}
