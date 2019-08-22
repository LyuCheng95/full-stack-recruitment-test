import React from 'react';
import BpkPanel from 'bpk-component-panel';
import flights from '../../flights.json';


import STYLES from './App.scss';
import Header from './../Header';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      {/* TODO: Add an information blue header component here */}
      {/* TODO: Add a component to display results here */}
      <div>
        {flights.itineraries.map((i)=>{
          return <BpkPanel>
            {i.price + " " + flights.legs.filter((l)=>{return l.id === i.legs[0]})[0].departure_airport}
          </BpkPanel>
        })}
      </div>
    </main>
  </div>
);

export default App;
