import PlayComponent from "./PlayComponent";

export default async function Page() {
  const response = await fetch(
    `${process.env.URL}/api/question/fetch-question`,
    {
      cache: "no-store",
    }
  );
  const question = await response.json();

  return <PlayComponent question={question.questions} />;
}
