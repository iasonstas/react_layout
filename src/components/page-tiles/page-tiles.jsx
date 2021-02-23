import React from 'react';
import { Link } from 'react-router-dom';
import './page-tiles.styles.scss';
import image1 from 'assets/images/i1.png';
import image2 from 'assets/images/i2.png';
import image3 from 'assets/images/i3.png';

const images = [image1, image2, image3];

export default function PageTiles({ PageList }) {
  return PageList.map((item, index) => {
    const { icon, title, description, link } = item;

    return (
      <div
        className="page-tile"
        key={index}
        style={index === 2 ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white' }}
      >
        <div className="p-2">
          <img className="m-2" src={images[index]} alt={icon} />
          <h3 className="card-title">{title}</h3>
          <p style={index === 2 ? { color: 'white' } : { color: '#6c757d' }}>{description}</p>
          <Link to="/" style={index === 2 ? { color: 'white' } : { color: 'blue' }}>
            {link} &gt;
          </Link>
        </div>
      </div>
    );
  });
}
