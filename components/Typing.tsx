"use client";

import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <div className="text-center h-8">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Senior Software Engineer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)

            .typeString(
              '<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">AI Full-Stack Developer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)

            .typeString(
              '<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Mobile App Developer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  );
}
