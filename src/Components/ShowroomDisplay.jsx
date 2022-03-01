import React, { useEffect } from "react";
import Coffee from './Coffee.jsx';

const ShowroomDisplay = props => {
  useEffect(() => {
    props.fetchCoffees()
  }, [])

  const coffees = [];
  for (let i = 0; i < props.coffeesList.length; i++) {
    coffees.push(<Coffee id={props.coffeesList[i].id} name={props.coffeesList[i].name}/>);
  }

      return (
      <div className="displayBox">
        <h4>Coffees: </h4>
        {coffees}
      </div>
      )
}

export default ShowroomDisplay;