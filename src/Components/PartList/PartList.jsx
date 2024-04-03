import React from "react";
import "./PartList.css";

function PartList() {
  return (
    <div className="list">
      <div className="internal">
        <h1>Internal Part</h1>
        <ol>
          <li>Clutch</li>
          <li>Console</li>
          <li>Dashboard</li>
          <li>Gear Stick</li>
          <li>Steering Wheel</li>
        </ol>
      </div>
      <div className="external">
        <h1>External Part</h1>
        <ol>
          <li>Air Intake</li>
          <li>Fog Light</li>
          <li>Headlight</li>
          <li>Shocks</li>
          <li>Silencer</li>
          <li>Tail Light</li>
          <li>Wheel</li>
        </ol>
      </div>
      <div className="hardware">
        <h1>Hardware</h1>
        <ol>
          <li>Bearing</li>
          <li>Bevel Gear</li>
          <li>Filter</li>
          <li>Fule Tank</li>
          <li>Helical Gear</li>
          <li>Piston</li>
          <li>Rack Pinion</li>
          <li>Spark Plug</li>
          <li>Spur Gear</li>
          <li>Valve</li>
        </ol>
      </div>
    </div>
  );
}

export default PartList;
