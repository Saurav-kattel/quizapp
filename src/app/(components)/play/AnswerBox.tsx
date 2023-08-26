"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function AnswerBox({
  answerTitle,
  answer,
  clickHandler,
}: {
  answerTitle: string;
  clickHandler: Function;
  answer: string;
}) {
  const [bg, setBg] = useState("bg-slate-800");

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        borderRadius: "0.6rem",
      }}
      transition={{
        type: "spring",
        duration: 0.2,
      }}
      onClick={() => {
        let color = clickHandler({ answerTitle, answer });
        setBg(color);
      }}
      className={`p-4 border-1 shadow-slate-900 rounded-lg shadow flex-warp m-2 ${bg}`}
    >
      {answerTitle}
    </motion.div>
  );
}
