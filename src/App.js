import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [removedPoints, setRemovedPoints] = useState([]);

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
    const removedPoint = newPoints.pop();
    // store removed point
    let newRemovedPoints = [...removedPoints, removedPoint];
    if (!removedPoint) return;
    setRemovedPoints(newRemovedPoints);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    let newPoints = [...points];
    let newRemovedPoints = [...removedPoints];
    const pointToRedo = newRemovedPoints.pop();
    if (!pointToRedo) return;
    newPoints.push(pointToRedo);
    setPoints(newPoints);
    setRemovedPoints(newRemovedPoints);
  };
  return (
    <>
      <button className="undo" onClick={handleUndo}>
        Undo
      </button>
      <button className="redo" onClick={handleRedo}>
        Redo
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
