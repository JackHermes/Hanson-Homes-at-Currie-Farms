import React from 'react';
import Gallery from 'react-photo-gallery';

import first from './images/Lot_8/Lot8-1.png';
import second from './images/Lot_8/Lot8-2.png';
import third from './images/Lot_8/Lot8-3.png';
import fourth from './images/Lot_8/Lot8-4.png';
import fifth from './images/Lot_8/Lot8-5.png';
import sixth from './images/Lot_8/Lot8-6.png';
import seventh from './images/Lot_8/Lot8-7.png';

const lot8 = [
  { src: first, width: 5, height: 3 },
  { src: second, width: 4, height: 3 },
  { src: third, width: 5, height: 3 },
  { src: fourth, width: 5, height: 3 },
  { src: fifth, width: 5, height: 3 },
  { src: sixth, width: 5, height: 3 },
  { src: seventh, width: 5, height: 3 }
];

export default class Photos extends React.Component {
  render() {
    return (
      <Gallery photos={lot8} />
    );
  }
}
