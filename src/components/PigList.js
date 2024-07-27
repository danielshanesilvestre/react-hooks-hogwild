import React, {useState} from "react";
import PigTile from "./PigTile";

function PigList({
  hogs
}) {
  const [hideGreased, setHideGreased] = useState(false);
  const [sortType, setSortType] = useState("none");

  const pigTileArray = hogs
    .filter(hog => {
      if (hideGreased && hog.greased === false) {
        return false;
      }
      return true;
    })
    .sort((hogA, hogB) => {
      switch (sortType) {
        case "name":
          return hogA.name.localeCompare(hogB.name);
        case "weight":
          return hogA.weight - hogB.weight;
        default:
          return 0;
      }
    })
    .map(hog => {
      return <PigTile key={hog.name} hog={hog} />
    });

  function handleClickToggleGreased(event) {
    setHideGreased(hideGreased => {
      if (hideGreased) {
        event.target.textContent = "Hide greased";
      } else {
        event.target.textContent = "Show greased";
      }
      
      return !hideGreased;
    });
  }

  function handleChangeSelectSort(event) {
    setSortType(event.target.value);
  }

  return (
    <div>
      <button type="button" onClick={handleClickToggleGreased}>Hide greased</button>
      <span>
        Sort based on:
        <select name="sort" onChange={handleChangeSelectSort}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </span>
      <br/>
      <br/>
      <div className="ui grid container">
        {pigTileArray}
      </div>
    </div>
  )
}

export default PigList;