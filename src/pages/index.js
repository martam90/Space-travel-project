import * as React from "react";
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <>
    <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"></link> */}
        <title>Frontend Mentor | Space tourism website</title>
        <meta
          name="description"
          content="Space tourism is a project that takes you beyond your dreams and expectations. Book a tour with our agency and discover the Universe!"
        />
      </Helmet>
    <div> 
    00 Home
    01 Destination
    02 Crew
    03 Technology

    So, you want to travel to
    Space
    Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!

    Explore
      
    </div>
    </>
  );
}

export default IndexPage
