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
  const handleUndo = () => {
    //shallow copy of current points
    let newPoints = [...points];
    // remove last added point
    newPoints.pop();
    setPoints(newPoints);
  };
  return (
    <>
      <button className="undo" onClick={handleUndo}>
        Undo
      </button>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point) => {
          return (
            <div
              className="point"
              style={{ top: point.y + "px", left: point.x + "px" }}
            ></div>
          );
        })}
      </div>
    </>
  );
}
export default App;
