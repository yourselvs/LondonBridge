import React from 'react';
import Header from '../../components/Header';

const Parking: React.FC = () => {
  const [spot1, setSpot1] = React.useState('open');
  const [spot2, setSpot2] = React.useState('open');

  return (<>
    <Header />
    <h1>Parking</h1>
    <p>
      Parking spot 1: {spot1}
      <br />
      <a href="#" onClick={() => {setSpot1(spot1 === 'open' ? 'occupied' : 'open')}}>Toggle</a>
    </p>
    <br />
    <br />
    <p>
      Parking spot 2: {spot2}
      <br />
      <a href="#" onClick={() => {setSpot2(spot2 === 'open' ? 'occupied' : 'open')}}>Toggle</a>
    </p>
  </>);
};

export default Parking;