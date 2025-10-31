"use client";

import ButtonWithSpeech from "./ButtonWithSpeech";

export default function InteractionButtons() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonWithSpeech
        text="Yes"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
      />
      <ButtonWithSpeech
        text="No"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow"
      />
      <ButtonWithSpeech
        text="Toilet"
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded shadow"
      />
      <div className="flex items-stretch justify-center gap-4">
        <ButtonWithSpeech text="Itchy" />
        <ButtonWithSpeech text="Pain" />
      </div>
      <div className="flex items-stretch justify-center gggap-4">
        <ButtonWithSpeech text="Nose" />
        <ButtonWithSpeech text="Neck" />
        <ButtonWithSpeech text="Back" />
      </div>
      <div className="flex justify-center gap-4">
        <ButtonWithSpeech text="Uncomfortable" />
        <ButtonWithSpeech text="Back" />
      </div>
      <ButtonWithSpeech text="Thirsty" />
      <ButtonWithSpeech text="Hungry" />
      <ButtonWithSpeech text="Others" />
    </div>
  );
}
