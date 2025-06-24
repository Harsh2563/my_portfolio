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
        fullScreen: false,        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 40, 
                smooth: 14 
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2, 
            },
            grab: {
              distance: 125, 
              links: {
                opacity: 0.28 
              }
            },
            repulse: {
              distance: 80, 
              duration: 0.3, 
            },
          },
        },particles: {          color: {
            value: darkMode ? "rgba(100, 255, 218, 0.45)" : "rgba(10, 25, 47, 0.35)",
          },
          links: {
            color: darkMode ? "rgba(136, 146, 176, 0.25)" : "rgba(51, 51, 51, 0.2)", 
            distance: 150,
            enable: true,
            opacity: 0.25, 
            width: 0.9, 
            triangles: {
              enable: true, 
              opacity: 0.02
            }
          },
          collisions: {
            enable: true,
          },          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1, 
            straight: false,
            trail: {
              enable: false, 
            },
          },number: {
            density: {
              enable: true,
              area: 1100, 
            },
            value: 50,
          },          
          opacity: {
            value: 0.4, 
            animation: {
              speed: 0.9, 
              minimumValue: 0.08, 
            }
          },
          shape: {
            type: ["circle"], 
          },
          size: {
            value: { min: 0.8, max: 2.2 }, 
            animation: {
              enable: true,
              speed: 1.8, 
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
