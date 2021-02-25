import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cell from "./Cell";
import "../styles/CellsList.css";

function CellsList() {
  useEffect(function () {
    document.getElementById("last-cell")?.scrollIntoView();
  });

  const cells = useSelector((state) => state.cells);

  return (
    <div className="cells-list">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          cellType={cell}
          lastCell={index === cells.length - 1 ? true : false}
        />
      ))}
    </div>
  );
}

export default CellsList;
