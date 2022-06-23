import React from 'react'

import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';
import Book from './components/profile/Book';

import './App.css';

const App = () => {
  return (
    <div className="App">

       {/* name */}
     <div className='FullName'> 
       <FullName/>
     </div>

      {/* photo */}
      <div className='ProfilePhoto'>
         <ProfilePhoto />
      </div>

    {/* Book */}
     <Book/>

    {/* address */}
      <Address/>   

    {/* the end */}
    </div>
  );
} 

export default App;
