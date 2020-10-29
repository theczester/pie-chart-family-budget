import React from "react";
import { ArrowRight } from "react-feather";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CurrentStep = () => {
  let query = useQuery();
  const isHidden = query.get("hideStep");
  const path = useLocation().pathname;
  const isMobile = useMediaQuery({
    query: "(max-device-width: 850px)",
  });
  if (!isHidden) {
    return (
      <div className="currentStep-container">
        <span style={{ color: path === "/" ? "black" : "lightgray" }}>
          1. Zarobki
        </span>
        <ArrowRight size={isMobile ? "30px" : "60px"} />
        <span style={{ color: path === "/wydatki" ? "black" : "lightgray" }}>
          2. Wydatki
        </span>
        <ArrowRight size={isMobile ? "30px" : "60px"} />
        <span style={{ color: path === "/wykres" ? "black" : "lightgray" }}>
          3. Wykres
        </span>
      </div>
    );
  } else return null;
};

export default CurrentStep;
