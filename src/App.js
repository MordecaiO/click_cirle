import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);

  const handlePlaceCircle = (e) => {
    console.log("you just clicked");
    const { clientX, clientY } = e;

    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  return <div className="App" onClick={handlePlaceCircle}></div>;
}

export default App;
