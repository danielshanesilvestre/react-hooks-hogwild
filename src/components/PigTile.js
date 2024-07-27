import React, {useState} from "react";

function PigTile({
  hog
}) {
  const {
    greased,
    "highest medal achieved": highestMedalAchieved,
    image,
    name,
    specialty,
    weight
  } = hog;

  const [detailsShown, setDetailsShown] = useState(false);

  function handleClick() {
    setDetailsShown(detailsShown => {
      return !detailsShown;
    })
  }

  return (
    <div className="ui eight wide column" onClick={handleClick}>
      <img src={image} style={{
        width: "240px",
        height: "240px"
      }}></img>
      <div>{name}</div>
      {
        detailsShown ? (
          <React.Fragment>
            <div>Greased: {greased.toString()}</div>
            <div>Specialty: {specialty}</div>
            <div>Weight: {weight}</div>
          </React.Fragment>
        ) : null
      }
    </div>
  )
}


export default PigTile;