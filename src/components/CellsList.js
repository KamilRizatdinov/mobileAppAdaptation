import { useSelector } from "react-redux";
import Cell from "./Cell";
import "../styles/CellsList.css";

function CellsList() {
  const cells = useSelector((state) => state.cells);

  return (
    <div className="cells-list">
      {cells.map((cell, index) => (
        <Cell key={index} cellType={cell} />
      ))}
    </div>
  );
}

export default CellsList;
