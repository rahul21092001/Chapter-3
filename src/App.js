import "./App.css";
import Counter from "./Components/Counter";
import DarkTheme from "./Components/DarkTheme";
import FocusBox from "./Components/FocusBox";
import RandomUser from "./Components/RandomUser";
import SquaredSum from "./Components/SquaredSum";
import useLocalStorage from "./Components/useLocalStorage";
function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="App">
      <DarkTheme />
      <RandomUser />
      <Counter />
      <FocusBox />
      <SquaredSum />
      <div style={{ display: "grid", placeItems: "center" }}>
        <h2>useLocalStorage</h2>
        <h4>Count - {count}</h4>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
