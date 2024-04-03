import React from "react";
import "./AddPartButton.css";
import arrow_icon from "../Assets/arrow.png";
import { Link } from 'react-router-dom';

function AddPartButton () {
  return (
    <div className="add-part">
      <div className="add-part-btn">
      <Link to='https://se-97-seller-side.vercel.app' target="_blank">Add your part hera</Link>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default AddPartButton;
