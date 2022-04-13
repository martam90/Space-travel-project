import React, { useState } from 'react';
import pagesData from '../../../assets/pagesData';
import { useMediaQuery } from 'react-responsive';

const MainTech = () => {
  const [currentTab, setCurrentTab] = useState(0);
  let currentTech = pagesData.technology[currentTab];

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1216px)',
  });

  const isMobileorTablet = useMediaQuery({
    query: '(max-width: 1215px)',
  });

  return (
    <main className="main__tech" id="main">
      <h1 className="main__title">
        <span className="main__title--number">03</span>
        <span className="main__title--name">Space Launch 101</span>
      </h1>
      <div className="main__content--bottom-wrapper">
        <div className="main__tech-img-wrapper">
          {isMobileorTablet && (
            <img
              className="main__tech-img"
              src={currentTech.images.landscape}
              alt={currentTech.name}
            />
          )}

          {isDesktopOrLaptop && (
            <img
              className="main__tech-img"
              src={currentTech.images.portrait}
              alt={currentTech.name}
            />
          )}
        </div>
        <div className="main__nav--tech" aria-label="tab navigation">
          {pagesData.technology.map((tech, index) => (
            <button
              role="tab"
              key={index}
              aria-label="tab button"
              aria-selected={currentTab === index ? 'true' : 'false'}
              className={
                currentTab === index
                  ? 'main__nav--bullet active'
                  : 'main__nav--bullet'
              }
              onClick={() => setCurrentTab(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="main__content--bottom-tech">
          <p className="main__content--bottom-subtitle">
            The terminology&nbsp;...
          </p>
          <h1 className="main__content--bottom-title">{currentTech.name}</h1>
          <p className="main__content--bottom-desc">
            {currentTech.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainTech;
