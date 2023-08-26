export function checkAnswer({
  answerTitle,
  answer,
}: {
  answerTitle: string;
  answer: string;
}) {
  if (answer === answerTitle) {
    return "bg-green-700";
  } else {
    return "bg-red-700";
  }
}
