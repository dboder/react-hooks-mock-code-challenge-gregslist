import React from "react";
import Search from "./Search";

function Header({searchBarfunct}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmitSearch={searchBarfunct}/>
    </header>
  );
}

export default Header;
