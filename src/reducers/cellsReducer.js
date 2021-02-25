const cellsReducer = (state = [], action) => {
  switch (action.type) {
    case "GENERATE_CELL":
      const newCell = chooseRandomElement(["alive", "dead"]);
      const resultingCells = getResultingCells(state, newCell);
      return resultingCells;
    default:
      return state;
  }
};

function chooseRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
}

function getResultingCells(cells, newCell) {
  /* If newly generated cell is 'alive' and previous cell 
    is also 'alive'we need to create a 'life' cell */
  if (newCell === "alive" && String(cells.slice(-1)) === "alive") {
    return [...cells, newCell, "life"];
  } else if (
  /* If newly generated cell is 'dead' and previous 2 cell's
    are also 'dead' we need replace 'life' to 'dead' */
    newCell === "dead" &&
    String(cells.slice(-2)) === String(["dead", "dead"]) &&
    String(cells.slice(-3, -2)) === "life"
  ) {
    return [...cells.slice(0, -3), ...["dead", "dead", "dead"], newCell];
  } else {
  /* If none of the condetion above is met we just add a newly generated cell */
    return [...cells, newCell];
  }
}

export default cellsReducer;
