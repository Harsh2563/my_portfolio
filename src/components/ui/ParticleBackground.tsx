import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
  className?: string;
  darkMode: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className, darkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);
  return (
    <Particles
      className={`${className || ""}`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        fullScreen: false,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: darkMode ? "#64ffda" : "#0a192f",
          },
          links: {
            color: darkMode ? "#8892b0" : "#333",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
            trail: {
              enable: true,
              length: 5,
              fillColor: darkMode ? "#0a192f" : "#ffffff"
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
            animation: {
              speed: 1,
              minimumValue: 0.1,
            }
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
            }
          },
        },
        detectRetina: true,
        background: {
          color: {
            value: "transparent"
          }
        }
      }}
    />
  );
};

export default ParticleBackground;
