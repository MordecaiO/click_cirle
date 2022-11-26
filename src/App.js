import "./App.css";

function App() {
  const handlePlaceCircle = (e) => {
    console.log("you just clicked");
  };
  return <div className="App" onClick={handlePlaceCircle}></div>;
}

export default App;
