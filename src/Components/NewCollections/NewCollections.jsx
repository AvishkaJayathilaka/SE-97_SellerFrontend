import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";

const apiUrl ="https://autopilot97-8dad7d99b556.herokuapp.com";


const NewCollections = (props) => {
  return (
    <div className="new-collections">
      <h1>NEW PARTS COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item, i) => {
          return (
            <Item
              id={item.id}
              key={i}
              name={item.name}
              image={apiUrl +item.image}
              new_price={item.new_price}
              brand={item.brand}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
