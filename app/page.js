"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { AdviceCard } from "./components";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // State that is set to hold the incoming API data
  const [advice, setAdvice] = useState([]);
  // State that checks for whether to data has loaded or not.
  const [isLoaded, setIsLoaded] = useState(false);

  // Function that generates a random number between 1 and 224 (the amount of objects in the Advice API)
  function randomizer() {
    let randomNumber = Math.floor(Math.random() * 226) + 1;

    return randomNumber;
  }

  // Fetching data using axios, while generating a new random number every time the function is run.
  async function fetchData(randomId) {
    randomizer();
    setIsLoaded(false);
    const { data } = await axios.get(
      `https://api.adviceslip.com/advice/${randomId}`
    );
    setTimeout(() => {
      setIsLoaded(true);
      setAdvice(data);
    }, 500);
  }

  // Running the fetchData() function on mount
  useEffect(() => {
    fetchData(randomizer());
  }, []);

  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-neutral-dark-gray">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ x: -20, scaleX: 0 }}
            animate={{ x: 0, scaleX: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            exit={{ x: 0, scaleX: 0 }}
            className="flex items-center justify-center"
          >
            <AdviceCard
              slip={advice.slip}
              fetchData={fetchData}
              randomizer={randomizer}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
