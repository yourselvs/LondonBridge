import React from 'react';
import Header from '../../components/Header';

const Parking: React.FC = () => {
  const [spot1, setSpot1] = React.useState('open');

  return (<>
    <Header />
    <h1>Parking</h1>
    <p>
      Parking spot 1: open
      <br />
      <a href="#" onClick={() => {setSpot1(spot1 === 'open' ? 'occupied' : 'open')}}>Toggle</a>
    </p>
    <br />
    <br />
    <p>
      Parking spot 2: closed
      <br />
      <a href="#" onClick={() => {setSpot1(spot1 === 'open' ? 'occupied' : 'open')}}>Toggle</a>
    </p>
  </>);
};

export default Parking;