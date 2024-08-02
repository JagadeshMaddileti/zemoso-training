import React from 'react';
import Component from './Component';


export const MyContext=React.createContext('');
const book={
  name:"Dropping",
  author:"James"
}

const App=()=>{
  return (
    <div className="App">
      <MyContext.Provider value={book.name}>
         <Component/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
