import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

const ParticleBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: window.innerWidth < 768 ? 40 : 80,
          },
          color: { value: "#00F5FF" },
          links: {
            enable: true,
            color: "#8A2BE2",
            distance: 150,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;