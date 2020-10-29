import React, { useState } from "react";
import chartTemplate from "../chartTemplate";

import { useLocation } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Expenses = () => {
  let query = useQuery();
  const total = query.get("total");

  const chart = chartTemplate([]);

  const [invalidExpenses, setInvalidExpenses] = useState(true);
  const [currentTotal, setCurrentTotal] = useState(0);

  const handleChange = () => {
    const arr = document.getElementsByClassName("expenses-input");
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i].value)) tot += parseInt(arr[i].value);
    }

    if (tot == total) {
      setInvalidExpenses(false);
    } else {
      setCurrentTotal(tot);
      setInvalidExpenses(true);
    }
  };

  return (
    <div className="container smaller-margin">
      <div className="header">
        <h1 className="step">2.</h1>
        <h1>Wpisz miesięczne wydatki twojej rodziny</h1>
      </div>
      <form className="expenses-form" action="/wykres" method="get">
        {chart.labels.map((label) => (
          <>
            <h2 className="expenses-input-header">{label}</h2>
            <input
              type="number"
              name={`${label.slice(0, 2)}${label.charAt(
                label.length - 1
              )}`.toLowerCase()}
              required
              step="10"
              min="0"
              max={total}
              className="expenses-input"
              onChange={() => handleChange()}
            />
          </>
        ))}
        <h2 className="expenses-input-header">Oszczędności</h2>
        <input
          type="number"
          name="osz"
          step="10"
          max={total}
          className="expenses-input"
          onChange={() => handleChange()}
        />
        {invalidExpenses && (
          <p className="invalidExpense-msg">
            Suma wszystkich wydatków i oszczędności musi być równa sumie
            dochodów czyli {total} natomiast obecna suma wynosi {currentTotal}!
          </p>
        )}
        <button
          className="submit-btn expenses-btn res-btn"
          type="submit"
          disabled={invalidExpenses}
        >
          Dalej
        </button>
      </form>
    </div>
  );
};

export default Expenses;
