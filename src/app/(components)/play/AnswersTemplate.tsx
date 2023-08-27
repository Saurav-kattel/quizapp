"use client";
import AnswerBox from "./AnswerBox";
import { checkAnswer } from "./checkAnswer";

export default function AnswerTemplate({
  options,
  answerIndex,
  setIndex,
  index,
  MAX_LENGTH,
}: {
  options: string[];
  answerIndex: number;
  index: number;
  MAX_LENGTH: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const answer = options[answerIndex];
  return (
    <div>
      {options.map((answers, idx) => {
        return (
          <AnswerBox
            key={idx}
            answerTitle={answers}
            clickHandler={checkAnswer}
            answer={answer}
            setIndex={setIndex}
            index={index}
            MAX_LENGTH={MAX_LENGTH}
          />
        );
      })}
    </div>
  );
}
