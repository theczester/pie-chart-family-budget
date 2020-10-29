import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Copy } from "react-feather";
import chartTemplate from "../chartTemplate";
import { isIOS } from "react-device-detect";
import { CheckCircle } from "react-feather";
import { Pie } from "react-chartjs-2";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PieChart = () => {
  let query = useQuery();
  const savings = query.get("osz");
  const isHidden = query.get("hideStep");
  const data = chartTemplate([]).labels.map((label) =>
    query.get(
      `${label.slice(0, 2)}${label.charAt(label.length - 1)}`.toLowerCase()
    )
  );
  const chartData = chartTemplate(data);

  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboardiOS = () => {
    const el = document.getElementById("textToCopy");
    const oldContentEditable = el.contentEditable,
      oldReadOnly = el.readOnly,
      range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999);

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand("copy");
    setTimeout(() => {
      document.activeElement.blur();
    }, 50);
    setCopySuccess(true);
  };

  const copyToClipboard = () => {
    const el = document.getElementById("textToCopy");
    el.select();
    document.execCommand("copy");
    setTimeout(() => {
      document.activeElement.blur();
    }, 50);
    setCopySuccess(true);
  };

  if (!isHidden) {
    return (
      <div className="chartPage-container">
        <div className="header add-margin">
          <h1 className="step">3.</h1>
          <h1>
            Skopiuj link do strony z gotowym wykresem {`(na dole strony)`}
          </h1>
        </div>
        <div className="chart-container">
          <Pie data={chartData} options={chartData.options} />
        </div>
        <h1 className="savings">Oszczędności: {savings}zł</h1>
        <button
          onClick={() => (isIOS ? copyToClipboardiOS() : copyToClipboard())}
          className="copy-btn submit-btn"
        >
          <span>Skopiuj Link</span> <Copy size="32px" />
        </button>
        {copySuccess && (
          <p className="copy-success">
            Link skopiowany do schowka! <CheckCircle />
          </p>
        )}
        <textarea
          id="textToCopy"
          value={`${window.location.href}&hideStep=true`}
          className="hidden-textarea"
        />
      </div>
    );
  } else {
    return (
      <div className="chartPage-container">
        <div className="chart-container">
          <Pie data={chartData} options={chartData.options} />
        </div>
        <h1 className="savings">Oszczędności: {savings}zł</h1>
      </div>
    );
  }
};

export default PieChart;
