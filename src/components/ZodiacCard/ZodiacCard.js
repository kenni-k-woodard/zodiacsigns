import React from 'react';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/pictures/${name}.png`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
      <span className="symbol">{symbol}</span>
    </div>
  );
}
