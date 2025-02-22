'use client';
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["developer", "programmer", "DSA Enthusiast"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600">
        I am a
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
