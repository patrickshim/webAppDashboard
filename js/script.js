const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
<div class="alert-banner">
  <p><b>Alert:</b> You have <b>6</b> overdue tasks to complete</p>
  <p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});

const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("bar-graph");
const mobileCanvas = document.getElementById("doughnut-graph");

let trafficData = {
  labels: [
          "16-22",
          "23-29",
          "30-5",
          "6-12", 
          "13-19", 
          "20-26", 
          "27-3",
          "4-10", 
          "11-17", 
          "18-24", 
          "25-31"
          ],
  datasets: [{
              data: [
                      750, 
                      1250, 
                      1000, 
                      2000, 
                      1500, 
                      1750, 
                      1250, 
                      1850, 
                      2250, 
                      1500,
                      2500  
                    ],
              backgroundColor: 'rgba(116, 119, 191, .3)',
              borderWidth: 1,
            }]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
    }]
  };
  const dailyOptions = {
   scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });

  const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
      ]
    }]
  };

  const mobileOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          fontStyle: 'bold'
        }
      }
    }
  };

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });

const send = document.getElementById("send");
const userField = document.getElementById("userField");
const messageField = document.getElementById("messageField");

send.addEventListener("click", (e) => {
  if (userField.value === "" & messageField.value === "") {
    alert("User field and message field cannot be empty");
    e.preventDefault();
  } else if (userField.value === "") {
    alert("User field cannot be empty"); 
    e.preventDefault();
  } else if (messageField.value === "") {
    alert("Message field cannot be empty");
    e.preventDefault();
  } else {
    alert (`Message sent succesfully to ${userField.value}`); 
    e.preventDefault();
    userField.value = "";
    messageField.value = "";
  }
})
  
const audio = new Audio();
audio.src = "sound/youGotmail.mp3";