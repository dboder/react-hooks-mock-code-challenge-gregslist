import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listByName}) {
  const [listingItems, setListingItems] = useState([]);
  const [listingChanged, setListingChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => {
        console.log(listByName)
        listByName ? setListingItems(items.filter(item => item.description === listByName)) : setListingItems(items);
      });
  }, [listingChanged, listByName]);

  return (
    <main>
      <ul className="cards">
      {listingItems.map((item) => (
          <ListingCard key={item.id} id={item.id} desc={item.description} img={item.image} loc={item.location} isListingDeleted={setListingChanged}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
