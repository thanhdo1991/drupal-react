import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import BoxWork from '../components/BoxWork';
import OurCLients from '../components/OurCLients';
import BoxHero from '../components/BoxHero';

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home Page">
        <BoxHero />
        <OurCLients />
        <BoxWork />
      </DefaultLayout>
    )
  }
}

export default Home;
