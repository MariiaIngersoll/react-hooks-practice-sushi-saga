import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, handleMoreButton, handleEatSushi}) {
  
  const arrowOfSushi = sushi.map((item) => {
    return <Sushi key={item.id} item={item} handleEatSushi={handleEatSushi}/>
  })
  return (
    <div className="belt">
      {arrowOfSushi}
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
}

export default SushiContainer;
