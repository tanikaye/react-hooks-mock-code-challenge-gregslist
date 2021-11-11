import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemList, setItemList}) {

  useEffect(() => {
fetch("http://localhost:6001/listings")
.then(r => r.json())
.then(data => setItemList(data))
  }, [])

  // console.log("item list: ", itemList)

  return (
    <main>
      <ul className="cards">
        {itemList.map((item, ix) => <ListingCard description={item.description} image={item.image} location={item.location}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

// use a useEffect to fetch the data from the b ack end, then set that data to state, which we might want to keep in the app component.
// then take that data, whcih si kept in state, and map over it, turning it into cards.
