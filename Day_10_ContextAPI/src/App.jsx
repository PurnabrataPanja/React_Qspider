import React from 'react'
import Provider1 from './Provider1';
import Porfile1 from './Profile1';
import Provider2 from './Provider2';
import Profile2 from './Profile2';
import Consumer1 from './Consumer1';
import Consumer2 from './Consumer2';

const App = () => {
  return (
    <>
    {/* <Provider1/> */}

    {/* <Provider1>
      <Consumer1/>
    </Provider1> */}
    
    {/* <Provider1>
      <Porfile1/>
    </Provider1> */}


      <Provider2>
        <Consumer2/>
      </Provider2>
      {/* <Provider2>
        <Profile2/>
      </Provider2> */}

    </>
  )
}
export  default App;