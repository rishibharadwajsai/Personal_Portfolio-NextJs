"use client";
import React from "react";
import { AnimatedPinDemo } from "./card";

export function Projects() {
  return (
    <div className="max-w-7xl relative mx-auto mt-20 py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl text-center font-bold ">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <AnimatedPinDemo
          title="/bitebooker.pages.dev"
          href="https://bitebooker.pages.dev/"
          heading="BiteBooker"
          body="BiteBooker is a modern full-stack web application that simplifies the process of pre-booking meals for users and managing meal bookings for administrators."
          imageUrl="/BiteBooker.png"
        />
        <AnimatedPinDemo
          title="/chennai.vit.ac.in/files/greencon"
          href="https://chennai.vit.ac.in/files/greencon"
          heading="Greencon 2025"
          body="The GREENCON'25, hosted at VIT Chennai, aims to facilitate discussions on sustainable advancements in ECE. This event will foster collaboration among leading researchers and aspiring engineers and innovations in the field."
          imageUrl="/greencon.png"
        />
        <AnimatedPinDemo
          title="/bitwars.ieeecsvitc.com"
          href="https://bitwars.ieeecsvitc.com/"
          heading="BITWARS 2024"
          body="The Bitwars project is a static web page designed for a competitive coding event, sponsored by Unstop. The event is organized by IEEE Computer Society VIT Chennai Student Chapter."
          imageUrl="/Bitwars-image.png"
        />
        <AnimatedPinDemo
          title="/rishibharadwajsai/FlappyBird-OpenCV"
          href="https://github.com/rishibharadwajsai/FlappyBird-OpenCV"
          heading="Flappy Bird - OpenCV"
          body="Face-Controlled Flappy Bird is an interactive game where you control a bird's vertical movement using facial gestures detected by a webcam."
          imageUrl="/flappy-bird-in-3d.png"
        />
        <AnimatedPinDemo
          title="/rishibharadwajsai/MediPredict"
          href="https://github.com/rishibharadwajsai/MediPredict"
          heading="MediPredict"
          body="This project explores the prediction of cardiac disease probability using a dataset of health metrics."
          imageUrl="/Health-care-image.png"
        />
        <AnimatedPinDemo
          title="/reactsocialmediaapp.vercel.app"
          href="https://reactsocialmediaapp.vercel.app/"
          heading="Social Media Post App"
          body="React Social Media App is a lightweight web application built using React.js, designed to facilitate posting and viewing of user-generated content."
          imageUrl="/Social-media-image.png"
        />
        <AnimatedPinDemo
          title="/rishibharadwajsai/OCR-Handwritten-text-recognition"
          href="https://github.com/rishibharadwajsai/OCR-Handwritten-text-recognition"
          heading="OCR - Handwritten text Recognition"
          body="This repository features a ReactJS-based whiteboard for handwritten text input, integrated with a TensorFlow 2.x HTR system trained on multiple datasets."
          imageUrl="/ocr.png"
        />
      </div>
    </div>
  );
}
