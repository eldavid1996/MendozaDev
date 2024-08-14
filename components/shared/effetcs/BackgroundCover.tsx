"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function BackgroundCover() {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState("#000000");
  const [isMobile, setIsMobile] = useState(false);

  const updateColor = () => {
    const darkMode = document.querySelector("html")?.classList.contains("dark");
    setColor(darkMode ? "#ffffff" : "#000000");
  };
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    if (isMobile) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.querySelector("html")!, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    !isMobile &&
    init && (
      <div className="absolute inset-0 z-[-1]">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
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
                  quantity: 6,
                },
                repulse: {
                  distance: 150,
                  duration: 0.5,
                },
              },
            },
            particles: {
              color: {
                value: color,
              },
              links: {
                color: color,
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 100,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: ["circle", "square"],
              },
              size: {
                value: { min: 1, max: 6 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
}
