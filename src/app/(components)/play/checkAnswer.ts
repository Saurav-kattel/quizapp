export function checkAnswer({
  answerTitle,
  answer,
}: {
  answerTitle: string;
  answer: string;
}) {
  if (answer === answerTitle) {
    return { color: "bg-green-700", isTrue: true };
  } else {
    return { color: "bg-red-700", isTrue: false };
  }
}
