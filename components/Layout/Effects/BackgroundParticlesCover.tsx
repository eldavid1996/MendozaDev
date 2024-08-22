"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

/* BackGround Particles for all pages */
export function BackgroundParticlesCover() {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState("#000000");
  const [isMobile, setIsMobile] = useState(false);

  /* Disable particles on mobile */
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      setIsMobile(true);
    }
  }, []);

  const updateColor = () => {
    const darkMode = document.querySelector("html")?.classList.contains("dark");
    setColor(darkMode ? "#ffffff" : "#000000");
  };

  useEffect(() => {
    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.querySelector("html")!, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  /* Add particles on scroll */
  useEffect(() => {
    const handleWheelEvent = (event: WheelEvent) => {
      const container = tsParticles.domItem(0); // Particles Container
      if (container) {
        const { clientX, clientY } = event; // Cursor Position
        const canvas = container.canvas.element;

        if (canvas) {
          // Ajust cursor position to the canvas
          const rect = canvas.getBoundingClientRect();
          const posX = (clientX - rect.left) * (canvas.width / rect.width);
          const posY = (clientY - rect.top) * (canvas.height / rect.height);

          // Randomly generate particles around the cursor with a small offset
          for (let i = 0; i < 6; i++) {
            const offsetX = Math.random() * 50 - 25; // Offset random between -25 and 25
            const offsetY = Math.random() * 50 - 25;

            const mouseData = {
              position: { x: posX + offsetX, y: posY + offsetY },
              clicking: false,
              inside: true,
            };

            container.interactivity.mouse.clickPosition = mouseData.position;
            container.particles.push(1, mouseData);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
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
                limit: {
                  value: 300,
                },
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
