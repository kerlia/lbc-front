import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offers() {
  return (
    <>
      <div className="ellipse"></div>
      <main className="main container">
        <div className="search-bar">
          <form action="">
            <span>
              <FontAwesomeIcon className="icon" icon="search" />
              <input
                placeholder="Que recherchez-vous?"
                type="text"
                name="query"
                value=""
              />
            </span>
            <input type="submit" value="Rechercher" />
          </form>
        </div>
      </main>
    </>
  );
}

export default Offers;
