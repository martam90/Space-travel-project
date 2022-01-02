import React from 'react';
import pagesData from '../../../assets/pagesData';

const moon = pagesData.destinations[0];

const MainDestination = () => {
  return (
    <main className="main">
      <p>
        <span>01</span>Pick your destination
      </p>
      <img src={moon.images.png} alt="moon"></img>
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
          <h1>{pagesData.destinations[0].name}</h1>
          <p>{pagesData.destinations[0].description}</p>
        </div>

        <div>
          <p>Avg. distance</p>
          <span>{pagesData.destinations[0].distance}</span>

          <p>Est. travel time</p>
          <span>{pagesData.destinations[0].travel}</span>
        </div>
      </section>
    </main>
  );
};

export default MainDestination;
