import PropTypes from "prop-types";
import "../styles/Cell.css";

function Cell({ cellType, lastCell }) {
  const innerContentMap = {
    dead: {
      cell_icon: "💀",
      cell_header: "Мёртвая",
      cell_description: "или прикидывается",
    },
    alive: {
      cell_icon: "💥",
      cell_header: "Живая",
      cell_description: "и шевелится!",
    },
    life: {
      cell_icon: "🐣",
      cell_header: "Жизнь",
      cell_description: "Ку-ку!",
    },
  };

  const innerContent = innerContentMap[cellType];

  return (
    <div className={`cell ${cellType}`} id={lastCell ? "last-cell" : ""}>
      <div className="left">
        <div className="cell_icon">{innerContent["cell_icon"]}</div>
      </div>

      <div className="right">
        <h2 className="cell_header">{innerContent["cell_header"]}</h2>
        <p className="cell_description">{innerContent["cell_description"]}</p>
      </div>
    </div>
  );
}

Cell.propTypes = {
  cellType: PropTypes.oneOf(["dead", "alive", "life"]),
  isLast: PropTypes.bool,
};

export default Cell;
