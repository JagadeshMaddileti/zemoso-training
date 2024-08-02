import React, { useContext } from 'react';
import { MyContext } from './App';

const ComponentC = () => {
  const value = useContext(MyContext);
  
  return (
    <div>{value}</div>
  );
};

export default ComponentC;