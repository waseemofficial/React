import "./App.css";
import Header from "./Header1";
import { useGlobalContext } from "./context";
function App() {
  const data = useGlobalContext();
  console.log(data);

  return (
    <div className="App">
      <Header />
      <h1>he</h1>
    </div>
  );
}

export default App;
