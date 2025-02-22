"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-600">
              Hi, I am <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black">
                <Cover>Rishi Bharadwaj Sai</Cover>
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/rishi_github.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
