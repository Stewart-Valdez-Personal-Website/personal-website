// Below is a function to create time and date clock.
function updateDateTime() {
    const currentDatetime = new Date();
    const formattedDatetime = currentDatetime.toLocaleString();
    document.getElementById('current-datetime').innerText = formattedDatetime;
  }
  
  // Update the date and time when the page loads
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);

function updateDateTime() {
    const currentDatetime = new Date();
    const formattedDatetime = currentDatetime.toLocaleString();
    document.getElementById('current-datetime').innerText = formattedDatetime;
  }
  
  // Update the date and time when the page loads
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
