"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

return (
  <div className="relative flex items-center justify-center h-screen overflow-hidden bg-[#0d47a1]">
    {init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )}
    <div className="absolute text-center z-10">
      <h1 className="text-white text-3xl font-bold px-4 md:text-6xl lg:text-7xl">
        Prepare for the SKOUR Token & Next-Gen Web3 Games
      </h1>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <a
          target="_blank"
          href="https://t.me/profitgateway0"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 max-w-xs w-full mx-2"
        >
          Telegram
        </a>
        <a
          target="_blank"
          href="https://x.com/Profitgateway_"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 max-w-xs w-full mx-2"
        >
          X (Twitter)
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/e/2PACX-1vRMk_BxrGsQ8beectPNZ6ujiTc-DLoLjU9_fGDKQdRkP8ye-k85bqph9Kz5EQQ5EfEHQY9iaxa1sFeL/pub"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 max-w-xs w-full mx-2"
        >
          Whitepaper
        </a>
      </div>
    </div>
  </div>
);

}
