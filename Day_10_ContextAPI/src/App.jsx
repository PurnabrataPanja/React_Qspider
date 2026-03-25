import React from 'react'
import Provider2 from './Provider2';
import Porfile3 from './Profile3';
import Provider3 from './Provider3';
import Profile4 from './Profile4';

const App = () => {
  return (
    <>
    {/* <Provider2/> */}
    <Provider2>
      <Porfile3/>
    </Provider2>
    <Provider3>
      <Profile4/>
    </Provider3>
    </>
  )
}
export  default App;