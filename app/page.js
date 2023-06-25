"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { AdviceCard } from "./components";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [advice, setAdvice] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(true);
  const [random] = useState(randomizer);

  async function fetchData(randomId) {
    randomizer();
    setIsLoaded(false);
    setError(true);
    const { data } = await axios.get(
      `https://api.adviceslip.com/advice/${randomId}`
    );
    setIsLoaded(true);
    setError(false);
    setAdvice(data);
    console.log(advice);
  }

  useEffect(() => {
    fetchData(random);
  }, []);

  function randomizer() {
    let randomNumber = Math.floor(Math.random() * 226) + 1;

    return randomNumber;
  }

  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-neutral-dark-gray">
      <AnimatePresence>
        {isLoaded && error === false ? (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="flex items-center justify-center"
          >
            <AdviceCard
              slip={advice.slip}
              fetchData={fetchData}
              randomizer={randomizer}
            />
          </motion.div>
        ) : (
          <p className="font-extrabold text-[18px] text-primary-neon">
            Loading...
          </p>
        )}
      </AnimatePresence>
    </main>
  );
}
