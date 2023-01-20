import React from 'react';
import './ZodiacCard.css';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="card">
      <span className="name">{name}</span>
      <img src={`${process.env.PUBLIC_URL}/zodiac_images/${name}.png`} />
      <span className="dates">{dates}</span>
      <span className="symbol">{symbol}</span>
    </div>
  );
}
