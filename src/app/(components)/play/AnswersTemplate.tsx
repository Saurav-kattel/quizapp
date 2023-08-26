"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnswerTemplate({
  options,
  answerIndex,
}: {
  options: string[];
  answerIndex: number;
}) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const checkCorrectAnswer = (answer: number) => {
    if (answer === answerIndex) {
      setIsCorrectAnswer(true);
    }
  };

  return (
    <ul>
      {options.map((answer, index) => {
        return (
          <div key={index}>
            <motion.li
              onClick={() => {
                checkCorrectAnswer(index);
              }}
              whileHover={{
                scale: 1.1,
                borderRadius: "0.6rem",
                backgroundColor: "white",
                color: "black",
              }}
              initial={{
                backgroundColor: "transparent",
              }}
              animate={{
                backgroundColor: isCorrectAnswer ? "green" : "transparent",
              }}
              transition={{
                type: "spring",
                duration: 0.2,
              }}
              className={`p-4 border-1 shadow-slate-900 rounded-lg shadow flex-warp m-2   ${
                isCorrectAnswer ? "bg-green-700" : "bg-red-700"
              }`}
            >
              {answer}
            </motion.li>
          </div>
        );
      })}
    </ul>
  );
}
