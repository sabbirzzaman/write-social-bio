import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center pb-20">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className="max-w-4xl text-center"
      >
        <motion.h1
          variants={{
            onscreen: {
              opacity: 1,
              y: 0,
            },
            offscreen: {
              opacity: 0,
              y: '20vh',
            },
          }}
          transition={{ duration: 0.4 }}
          className="text-6xl font-bold mb-5"
        >
          lets Ai write ur social bio
        </motion.h1>
        <motion.p
          variants={{
            onscreen: {
              opacity: 1,
              y: 0,
            },
            offscreen: {
              opacity: 0,
              y: '20vh',
            },
          }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-lg"
        >
          impress your followers with unique and creative social media bios,
          courtesy of Ai. our Ai-generated bios are not only creative, but they
          are also unique, ensuring that your profile stands out from the crowd.
        </motion.p>
        <motion.div
          variants={{
            onscreen: {
              opacity: 1,
              y: 0,
            },
            offscreen: {
              opacity: 0,
              y: '20vh',
            },
          }}
          transition={{ duration: 0.50 }}
        >
          <motion.button className="button-primary w-2/4" type="button">
            start
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
