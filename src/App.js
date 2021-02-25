import Button from "./components/Button";
import CellsList from "./components/CellsList";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <CellsList />
      <Button />
    </div>
  );
}

export default App;
