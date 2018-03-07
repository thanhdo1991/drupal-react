import React, { Component } from 'react';

class BoxHero extends Component {
  render() {
    return (
      <div class="hero-banner hero-banner--large bg--dark-blue--overlay">
        <div class="hero-banner__image"><img src="https://ffw-style.herokuapp.com/images/hero.jpg" alt="FFW images" width="2000" height="1500" /> </div>
        <div class="hero-banner__inner">
          <div class="container">
            <div class="hero-banner__content">
              <h1 class="hero-banner__heading">We engineer digital business solutions and create engaging online experiences.</h1>
              <div class="hero-banner__link"> <a href="/" class="btn">See our work</a> <a href="/" class="btn">Get in touch</a> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxHero;
