import React, {useState} from "react";

function ListingCard({id, desc, img, loc, isListingDeleted }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite(e) {
    setIsFavorite(!isFavorite);
  }
  
  function handleDeleteButton(e) {
    fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));  
      isListingDeleted(true);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        {/* Placeholder links "https://via.placeholder.com/300x300" */}
        <img src={img} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>☆</button>
        )}
        <strong>{desc}</strong>
        <span> · {loc}</span>
        <button className="emoji-button delete" onClick={handleDeleteButton}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
