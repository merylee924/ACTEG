
const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20
}

const randomData = () => {
  return [
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
  ]
}

const Parametrer = ['pH', 'N', 'P', 'K', 'Ca', 'Zn', 'C'];

const cssColors = (color) => {
  return getComputedStyle(document.documentElement).getPropertyValue(color);
}

const getColor = () => {
  return window.localStorage.getItem('color') ?? 'cyan';
}

const colors = {
  primary: cssColors(`--color-${getColor()}`),
  primaryLight: cssColors(`--color-${getColor()}-light`),
  primaryLighter: cssColors(`--color-${getColor()}-lighter`),
  primaryDark: cssColors(`--color-${getColor()}-dark`),
  primaryDarker: cssColors(`--color-${getColor()}-darker`),
}

const barColors = [
  'rgba(255, 54, 54, 1)',      // Color for pH
  'rgba(54, 162, 235, 1)',     // Color for N
  'rgba(255, 206, 86, 1)',     // Color for P
  'rgba(75, 192, 192, 1)',     // Color for K
  'rgba(153, 102, 255, 1)',    // Color for Ca
  'rgba(255, 159, 64, 1)',     // Color for Zn
  'rgba(99, 255, 132, 1)'      // Color for C
];

const hoverBarColors = [
  'rgba(167, 0, 0, 1)',        // Hover color for pH
  'rgba(38, 120, 173, 1)',     // Hover color for N
  'rgba(204, 166, 69, 1)',     // Hover color for P
  'rgba(58, 147, 147, 1)',     // Hover color for K
  'rgba(122, 82, 204, 1)',     // Hover color for Ca
  'rgba(204, 127, 51, 1)',     // Hover color for Zn
  'rgba(75, 192, 75, 1)'       // Hover color for C
];

const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: Parametrer,
    datasets: [
      {
        data: randomData(),
        backgroundColor: barColors,
        hoverBackgroundColor: hoverBarColors,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
          ticks: {
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 5,
          },
          categoryPercentage: 0.5,
          maxBarThickness: '10',
        },
      ],
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  },
})

const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['pH', 'N', 'P', 'K', 'Ca', 'Zn', 'C'],
    datasets: [
      {
        data: [random(), random(), random(), random(), random(), random(), random()],
        backgroundColor: [
          'rgba(255, 54, 54, 1)',      // Color for pH
          'rgba(54, 162, 235, 1)',     // Color for N
          'rgba(255, 206, 86, 1)',     // Color for P
          'rgba(75, 192, 192, 1)',     // Color for K
          'rgba(153, 102, 255, 1)',    // Color for Ca
          'rgba(255, 159, 64, 1)',     // Color for Zn
          'rgba(99, 255, 132, 1)'      // Color for C
        ],
        hoverBackgroundColor: [
          'rgba(167, 0, 0, 1)',        // Hover color for pH
          'rgba(38, 120, 173, 1)',     // Hover color for N
          'rgba(204, 166, 69, 1)',     // Hover color for P
          'rgba(58, 147, 147, 1)',     // Hover color for K
          'rgba(122, 82, 204, 1)',     // Hover color for Ca
          'rgba(204, 127, 51, 1)',     // Hover color for Zn
          'rgba(75, 192, 75, 1)'       // Hover color for C
        ],
        borderWidth: 0,
        weight: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});

const activeUsersChart = new Chart(document.getElementById('activeUsersChart'), {
  type: 'bar',
  data: {
    labels: [...randomData(), ...randomData()],
    datasets: [
      {
        data: [...randomData(), ...randomData()],
        backgroundColor: colors.primary,
        borderWidth: 0,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      ticks: {
        padding: 10,
      },
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: 'Users',
      bodySpacing: 4,
      footerSpacing: 4,
      hasIndicator: true,
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})

const lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        data: randomData(),
        fill: false,
        borderColor: colors.primary,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

let randomUserCount = 0

const usersCount = document.getElementById('usersCount')

const fakeUsersCount = () => {
  randomUserCount = random()
  activeUsersChart.data.datasets[0].data.push(randomUserCount)
  activeUsersChart.data.datasets[0].data.splice(0, 1)
  activeUsersChart.update()
  usersCount.innerText = randomUserCount
}

setInterval(() => {
  fakeUsersCount()
}, 1000)
