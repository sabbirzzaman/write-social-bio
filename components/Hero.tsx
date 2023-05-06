import React from 'react';

export default function Hero() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center pb-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-5">lets Ai write ur social bio</h1>
        <p className="mb-10 text-lg">
          impress your followers with unique and creative social media bios,
          courtesy of Ai. our Ai-generated bios are not only creative, but they
          are also unique, ensuring that your profile stands out from the crowd.
        </p>
        <button className="button-primary w-2/4" type="button">
          start
        </button>
      </div>
    </div>
  );
}
