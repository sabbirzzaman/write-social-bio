/* eslint-disable import/extensions */
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="">
      <div className="wsb-container">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
