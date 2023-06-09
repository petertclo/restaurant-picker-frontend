import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../components/BigButton";

const TryNew: React.FC = () => {
    const navigate = useNavigate();
    const handleAsianClick = () => {
        navigate("/asian");
      };
      const handleWesternClick = () => {
        navigate("/western");
      };
  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Try something new</p>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleAsianClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              Asian
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleWesternClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Western
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryNew;
