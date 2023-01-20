import React from 'react';
import './Main.css';
import background from '../../background.png';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <ZodiacCard key={zodiac.id} {...zodiac} />
      ))}
    </main>
  );
}
