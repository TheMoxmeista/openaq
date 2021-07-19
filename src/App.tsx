import React from 'react';
import Header from 'components/Header';
import Cities from 'components/Cities';

import useCities from 'hooks/useCities';

function App(){
    const [loading, error, cities] = useCities();

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <>
        <Header />
        <Cities loading={loading} cities={cities} />
      </>
    )
}

export default App;
