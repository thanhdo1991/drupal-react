import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home Page" container>
        <h1>Home</h1>
      </DefaultLayout>
    )
  }
}

export default Home;
