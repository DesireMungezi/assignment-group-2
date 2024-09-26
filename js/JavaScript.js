//Here we give access to the <p> tag through the id
const dateTimeElement = document.getElementById('dateAndTime');

//the function that updates time and date
function updateDateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    dateTimeElement.textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000) //this will update the time every second.

document.getElementById("button1").addEventListener("click",function(event)
    {
    if (event.target === this)
        {document.body.style.backgroundImage = 'url("images/bakery1.png")'}
    });
