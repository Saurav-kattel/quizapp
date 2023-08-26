"use client";
import { Question } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnswerTemplate from "./AnswersTemplate";
export default function ShowQuestion({ question }: { question: Question[] }) {
  const [index, setIndex] = useState(0);
  const MAX_LENGTH = question.length;
  return (
    <div className="flex w-[100vw] flex-col items-center justify-center">
      <div className="w-[90vw] p-4 rounded-lg shadow border-slate-200 border-1 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="h-[40vh] flex flex-col items-center justify-center"
          >
            <p>{question[index].question}</p>
            <AnswerTemplate
              answerIndex={question[index].answerIndex}
              options={question[index].options}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => {
          const newIndex = index >= MAX_LENGTH - 1 ? 0 : index + 1;
          setIndex(newIndex);
        }}
      >
        Next
      </button>
    </div>
  );
}
