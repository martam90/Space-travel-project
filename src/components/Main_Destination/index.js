import React from 'react';
import pagesData from '../../../assets/pagesData';

const Main_Destination = () => {
  return (
    <main className="main">
      <p>
        <span>01</span>Pick your destination
      </p>
      <img src="" alt="moon"></img>
      <ul>
        <li>
          <a href="#">Moon</a>
        </li>
        <li>
          <a href="#">Mars</a>
        </li>
        <li>
          <a href="#">Europa</a>
        </li>
        <li>
          <a href="#">Titan</a>
        </li>
      </ul>

      <section>
        <div>
          <h1>Moon</h1>
          <p>description</p>
        </div>

        <div>
          <p>Avg. distance</p>
          <span></span>

          <p>Est. travel time</p>
          <span></span>
        </div>
      </section>
    </main>
  );
};

export default Main_Destination;
