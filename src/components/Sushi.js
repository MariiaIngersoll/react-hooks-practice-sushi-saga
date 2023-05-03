import React, { useState } from "react";

function Sushi( {item, handleEatSushi}) {

  const { eaten } = item;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(item)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={item.img_url}
            alt={item.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  );
}

export default Sushi;
