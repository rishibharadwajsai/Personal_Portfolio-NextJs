"use client";
import React from "react";
import { MovingBorderDemo } from "./button";

export function Contact() {
  return (
    <div className="max-w-7xl relative mx-auto mt-20 py-20 md:py-0 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl text-center md:text-7xl font-bold ">
        Want to Contact Me?
      </h1>
      <div className="mt-10">
        <MovingBorderDemo />
      </div>
    </div>
  );
}
