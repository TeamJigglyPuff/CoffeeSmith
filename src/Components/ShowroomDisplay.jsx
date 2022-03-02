import React, { useEffect, useState } from "react";
import Coffee from './Coffee.jsx';

const ShowroomDisplay = props => {
  const [select, setSelect] = useState('');

  useEffect(() => {
    props.fetchCoffees()
  }, [])

  const coffees = [];
  const roasters = new Set();
  const processes = new Set();
  const regions = new Set();
  const notes = new Set();
  for (let i = 0; i < props.coffeesList.length; i++) {
    roasters.add(props.coffeesList[i].roaster);
    processes.add(props.coffeesList[i].process);
    regions.add(props.coffeesList[i].region);
    notes.add(props.coffeesList[i].notes);
    coffees.push(<Coffee coffeeObj={props.coffeesList[i]} />);
  }

  function filterList(coffeesList, property) {
    if (!coffeesList) return;

    return coffeesList.filter(obj => {
      if (obj[property] === select) {
        return obj;
      }
    })
  }

  return (
    <div className="displayBox">
      <h4>Coffees: </h4>
      {coffees}
    </div>
  )
}

export default ShowroomDisplay;