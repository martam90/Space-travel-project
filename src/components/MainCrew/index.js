import React, { useState } from 'react';
import pagesData from '../../../assets/pagesData';

const MainCrew = () => {
  const [currentTab, setCurrentTab] = useState(0);

  let currentCrew = pagesData.crew[currentTab];

  return (
    <main className="main__crew" id="main">
      <div className="main__content--top">
        <h1 className="main__title">
          <span className="main__title--number">02</span>
          <span className="main__title--name">Meet your crew</span>
        </h1>

        <div className="main__crew-tablet">
          <picture>
            <source srcSet={currentCrew.images.webp} type="image/webp" />
            <source srcSet={currentCrew.images.png} type="image/png" />
            <img
              className="main__crew-img"
              src={currentCrew.images.png}
              alt={currentCrew.name}
            />
          </picture>
          <div className="main__content--bottom">
            <div className="main__tabs" role="tablist" aria-label="tab navigation">
              {pagesData.crew.map((item, index) => (
                <button
                  role="tab"
                  aria-label="tab button"
                  aria-selected={currentTab === index ? 'true' : 'false'}
                  key={index}
                  className={
                    currentTab === index
                      ? 'main__tabs--bullet active'
                      : 'main__tabs--bullet'
                  }
                  onClick={() => setCurrentTab(index)}
                ></button>
              ))}
            </div>
            <div className="main__content--bottom--wrapper">
              <div className="main__content--bottom-heading">
                <p className="heading__role">{currentCrew.role}</p>
                <h2 className="heading__name">{currentCrew.name}</h2>
              </div>

              <div className="main__content--bottom-details">
                <p>{currentCrew.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainCrew;
