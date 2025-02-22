"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2022 - 2026",
      content: (
        <div>
          <p className="text-black text-base md:text-lg font-normal mb-8">
            Electronics and Computer Engineering <br />
            <span className="text-sm italic text-gray-600">
              Vellore Institute of Technology, Chennai
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <p className="text-black  text-base md:text-lg font-normal mb-8">
            XII
            <br />
            <span className="text-sm italic text-gray-600">
              Sri Chaitanya Junior College, Hyderabad
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-black text-base md:text-lg font-normal mb-8">
            X<br />
            <span className="text-sm italic text-gray-600">
              Noble High School, Chirala
            </span>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
