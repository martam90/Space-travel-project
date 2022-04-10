import React from 'react';
import { Link } from 'gatsby';

const Main = () => {
  return (
    <main className="main" id="main">
      <section className="main__homepage--section">
        <div>
          <h1 className="main__homepage--heading">
            So, you want to travel to{' '}
            <span className="main__heading-span">Space</span>
          </h1>
          <p className="main__text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination" className="cta">
          Explore
        </Link>
      </section>
    </main>
  );
};

export default Main;
