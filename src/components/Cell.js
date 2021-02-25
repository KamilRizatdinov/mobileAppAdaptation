import PropTypes from "prop-types";
import "../styles/Cell.css";

function Cell({ cellType }) {
  function getInnerContent(cellType) {
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

    return innerContentMap[cellType];
  }

  const innerContent = getInnerContent(cellType);

  return (
    <div className={`cell ${cellType}`}>
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
};

export default Cell;
