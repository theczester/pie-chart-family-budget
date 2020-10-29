const chartTemplate = (chartData) => {
  return {
    labels: [
      "Restauracje i hotele",
      "Edukacja",
      "Rekreacja i kultura",
      "Łączność",
      "Transport",
      "Zdrowie",
      "Pozostałe towary i usługi",
      "Pozostałe wydatki np. kieszonkowe",
      "Żywność",
      "Odzież i obuwie",
      "Użytkowanie mieszkania i energia",
    ],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          "#52D726",
          "#DDDDDD",
          "#FF7300",
          "#FF0000",
          "#007ED6",
          "#7CDDDD",
          "#C608D1",
          "#E6F69D",
          "#FFEC00",
          "#FF2E7E",
          "#FFAB05",
        ],
        borderWidth: 2,
      },
    ],
    options: {
      responsive: true,
      title: {
        text: "Budżet domowy",
        display: true,
        fontSize: 28,
        padding: 20,
      },
      animation: { animateScale: true },
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontSize: 16,
          fontFamily: "'Roboto', sans-serif",
        },
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            const expense = data["datasets"][0]["data"][tooltipItem["index"]];
            return `${expense}zł`;
          },
          afterLabel: function (tooltipItem, data) {
            const dataset = data["datasets"][0];
            const percent = Math.round(
              (dataset["data"][tooltipItem["index"]] /
                dataset["_meta"][0]["total"]) *
                100
            );
            return `(${percent}%)`;
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#007bff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
      },
    },
  };
};

export default chartTemplate;
