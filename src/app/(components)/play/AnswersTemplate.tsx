"use client";
import AnswerBox from "./AnswerBox";
import { checkAnswer } from "./checkAnswer";

export default function AnswerTemplate({
  options,
  answerIndex,
}: {
  options: string[];
  answerIndex: number;
}) {
  const answer = options[answerIndex];
  return (
    <div>
      <AnswerBox
        answerTitle={options[0]}
        clickHandler={checkAnswer}
        answer={answer}
      />
      <AnswerBox
        answerTitle={options[1]}
        clickHandler={checkAnswer}
        answer={answer}
      />

      <AnswerBox
        answerTitle={options[2]}
        clickHandler={checkAnswer}
        answer={answer}
      />
      <AnswerBox
        answerTitle={options[3]}
        clickHandler={checkAnswer}
        answer={answer}
      />
    </div>
  );
}
