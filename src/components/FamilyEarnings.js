import React from "react";

const FamilyEarnings = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="step">1.</h1>
        <h1>Wpisz miesięczne zarobki twojej rodziny</h1>
      </div>
      <form action="/wydatki" method="get" className="earnings-form">
        <input
          type="number"
          placeholder="np. 5000"
          className="earnings-input"
          name="total"
          step="100"
          min="1000"
          required
        />
        <button className="submit-btn res-btn" type="submit">
          Dalej
        </button>
      </form>
    </div>
  );
};

export default FamilyEarnings;
