import Image from "next/image";
import InteractionButtons from "./InteractionButtons";
import ButtonsQuestions from "./ButtonsQuestions";

export default function DNPPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            src="/aki.png"
            alt="/next.svg"
            width={200}
            height={40}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Easy interactions
            </h1>
            <InteractionButtons />
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Questions
            </h1>
            <ButtonsQuestions />
          </div>
        </div>
      </main>
    </div>
  );
}
