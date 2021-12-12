import React from 'react';
import { Link } from 'gatsby';

const Main = () => {
  return (
    <main className="main">
      <section>
        <h1>
          So, you want to travel to{' '}
          <span className="main__heading-span">Space</span>
        </h1>
        <div>
          <p className="main__text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>

      <Link to="/destination">
        <button className="cta">Explore</button>
      </Link>
    </main>
  );
};

export default Main;
