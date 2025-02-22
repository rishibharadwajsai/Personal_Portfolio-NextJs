"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <center>
      <Button
        borderRadius="1.75rem"
        onClick={() => {
          window.open("https://linktr.ee/rishibharadwajsai");
        }}
        className="bg-white text-black  border-neutral-200"
      >
        Click Here
      </Button>
    </center>
  );
}
