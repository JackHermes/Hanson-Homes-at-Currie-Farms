import React from 'react';
import Gallery from 'react-photo-gallery';

import first from './images/Lot_9/Lot9-1.png';
import second from './images/Lot_9/Lot9-2.png';
import third from './images/Lot_9/Lot9-3.png';


const lot9 = [
  { src: first, width: 5, height: 3 },
  { src: second, width: 4, height: 3 },
  { src: third, width: 5, height: 3 }
];

export default class Lot9 extends React.Component {
  render() {
    return (
      <Gallery className='gallery' photos={lot9} />
    );
  }
}
