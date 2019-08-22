import React from 'react';
import BpkPanel from 'bpk-component-panel';
import flights from '../../flights.json';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkSmallLongArrowRight from 'bpk-component-icon/sm/long-arrow-right';
import BpkButton from 'bpk-component-button';

import STYLES from './App.scss';
import Header from './../Header';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const itineraryPanel = info => {
  const legsDetail = flights.legs.filter(leg => info.legs.includes(leg.id));
  const legBar = detail => {
    const logo = 'https://logos.skyscnr.com/images/airlines/favicon/' + detail.airline_id + '.png';
    const timePlaceBox = (time, place) => {
      <BpkGridContainer>
        <BpkGridRow>
          {time}
        </BpkGridRow>
        <BpkGridRow>
          {place}
        </BpkGridRow>
      </BpkGridContainer>
    }
    return (
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={2}>
            <img src={logo} />
          </BpkGridColumn>
          <BpkGridColumn width={8}>
            <BpkGridColumn width={3}>
              {timePlaceBox}
            </BpkGridColumn>
            <BpkGridColumn width={3}>
              {<BpkSmallLongArrowRight />}
            </BpkGridColumn>
            <BpkGridColumn width={3}>
              {timePlaceBox}

            </BpkGridColumn>
          </BpkGridColumn>
          <BpkGridColumn width={2}>
            <BpkGridRow>
              {detail.duration_mins}
            </BpkGridRow>
            <BpkGridRow>
              {detail.stops ? (
                <div>Direct</div>
              ) : (
                  <div>{detail.stops}+ stops</div>
                )}
            </BpkGridRow>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    )
  }
  const itineraryBar = (
    <BpkGridRow>
      <BpkGridColumn>
        <BpkGridRow>
          {info.price}
        </BpkGridRow>
        <BpkGridRow>
          {info.agent}
        </BpkGridRow>
      </BpkGridColumn>
      <BpkGridColumn>
        <BpkButton>Select</BpkButton>
      </BpkGridColumn>
    </BpkGridRow>
  )
  return (
    <BpkPanel key={info.id}>
      {legsDetail.map(detail => legBar(detail))}
      {itineraryBar}
    </BpkPanel>
  )
}


const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <div>
        EDI→LON
        2 travellers, economy
      </div>
      {flights.itineraries.map(info => itineraryPanel(info))}
    </main>
  </div>
);

export default App;
