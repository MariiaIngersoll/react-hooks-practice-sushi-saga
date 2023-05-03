import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiDisplay, setSushiDisplay] = useState([])

  const [beltPosition, setBeltPosition] = useState(0)

  const [money, setMoney ] = useState(100)

  const displayCount = 4;

  const handleMoreButton = () => {
    setBeltPosition((beltPosition + displayCount) % sushiDisplay.length)
  }

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((data) => setSushiDisplay(data))
  }, [])

   
  function setEaten(piece) {
      const remainingMoney = money - piece.price;
      if (!piece.eaten && remainingMoney >= 0) {
        setMoney(remainingMoney)

        setSushiDisplay(
          sushiDisplay.map((sushi) => 
          sushi.id === piece.id ? { ...sushi, eaten: true} : sushi
          )
        )}
    
  }

  return (
    <div className="app">
      <SushiContainer 
          handleMoreButton = {handleMoreButton }
          sushi={sushiDisplay.slice(beltPosition, beltPosition + displayCount)} 
          handleEatSushi={setEaten} />
      <Table money={money} plates={sushiDisplay.filter((sushi) => sushi.eaten)}/>
    </div>
  );
}

export default App;
