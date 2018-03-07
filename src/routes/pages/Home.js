import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import BoxWork from '../components/BoxWork';

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home Page" container>
        <h1>Home</h1>
        <BoxWork />
      </DefaultLayout>
    )
  }
}

export default Home;
