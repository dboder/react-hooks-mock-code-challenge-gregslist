import { useState } from "react";
import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchBar, setSearchBar] = useState([]);

  return (
    <div className="app">
      <Header searchBarfunct={setSearchBar} />
      <ListingsContainer listByName={searchBar}/>
    </div>
  );
}

export default App;
