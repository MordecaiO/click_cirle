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

  return (
    <div className="App" onClick={handlePlaceCircle}>
      {points.map((point) => {
        return (
          <div
            className="point"
            style={{ top: point.y + "px", left: point.x + "px" }}
          >
            x
          </div>
        );
      })}
    </div>
  );
}
export default App;
