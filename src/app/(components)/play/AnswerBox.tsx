"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setScore } from "@/redux/features/scoreSlice";
import { setIsRight } from "@/redux/features/answerSlice";
import { handleSoundAndColor } from "./handleColorAndSound";
export default function AnswerBox({
  answerTitle,
  answer,
  index,
  setIndex,
  MAX_LENGTH,
  clickHandler,
}: {
  answerTitle: string;
  clickHandler: Function;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  answer: string;
  MAX_LENGTH: number;
}) {
  const [bg, setBg] = useState("bg-slate-800");
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const score = useSelector((state: any) => state.score.score);

  function handleClick() {
    let { color, isTrue } = clickHandler({ answerTitle, answer });
    handleSoundAndColor({
      setBg,
      isTrue,
      dispatch,
      setScore,
      setIsRight,
      MAX_LENGTH,
      index,
      score,
      color,
      setIndex,
    });
  }
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
        if (!isClicked) {
          setIsClicked(true);
          handleClick();
        }
      }}
      className={`p-4 border-1 shadow-slate-900 rounded-lg shadow flex-warp m-2 ${bg}`}
    >
      {answerTitle}
    </motion.div>
  );
}
