import Link from "next/link";
export default async function Page() {
  return (
    <div className="w-full gap-4 h-[60vh] flex flex-col items-center justify-center">
      <p className="text-3xl ">Play New Game</p>
      <button className="border-[1px] px-3 py-2  border-slate-400 rounded-md text-center">
        <Link href={"/play"}>New Game</Link>
      </button>
    </div>
  );
}
