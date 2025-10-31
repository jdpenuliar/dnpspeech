"use client";

import { useCallback } from "react";
import { useSpeak } from "react-text-to-speech";
import ButtonWithSpeech from "./ButtonWithSpeech";

export default function ButtonsQuestions() {
  const {
    speak, // Function to start speech with provided text and options
    // Text, // Component that renders speech text in a <div> and supports standard HTML <div> props
    // speechStatus, // String that stores current speech status
    // isInQueue, // Indicates whether the speech is currently playing or waiting in the queue
    // start, // Function to start the speech or put it in queue
    // pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeak();

  const handleSpeak = useCallback(
    (text: string) => {
      stop();
      speak(text, {
        rate: 1.2,
        lang: "en-US",
        pitch: 1,
        volume: 0.9,
        voiceURI: "Google US English",
      });
    },
    [speak, stop]
  );

  return (
    <div className="flex flex-col gap-4">
      <ButtonWithSpeech
        text="Heart"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow"
      />
      <ButtonWithSpeech
        text="Blood Pressure"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow"
      />
      <ButtonWithSpeech text="Heart rate" />
      <ButtonWithSpeech text="Sugar" />
    </div>
  );
}
