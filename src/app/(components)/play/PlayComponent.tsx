"use client";
import { Question } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import AnswerTemplate from "./AnswersTemplate";

export default function ShowQuestion({ question }: { question: Question[] }) {
  const [index, setIndex] = useState(0);
  const MAX_LENGTH = question.length;
  const score = useSelector((state: any) => state.score.score);

  return (
    <div className="flex w-[100vw] flex-col items-center justify-center">
      <span className="text-white w-full text-right p-2">score: {score}</span>

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
              MAX_LENGTH={MAX_LENGTH}
              answerIndex={question[index].answerIndex}
              options={question[index].options}
              setIndex={setIndex}
              index={index}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
