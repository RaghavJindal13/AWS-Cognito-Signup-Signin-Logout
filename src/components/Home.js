import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">About</span> Roopra Biomols is a bioinformation company that specializes in addressing the complex challenges and growing needs of the Biotech industry. Advanced scientific research in the arena of biosciences is creating a data overflow that needs to be deciphered by transferring data into technology. Our goal is to provide complete bioinformatics solutions to Biotech and Pharma companies and academia all over the world.
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
