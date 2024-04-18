import ReactParticles from 'react-tsparticles';
import { useThemeContext } from '../hooks/themeHook';

const LIGHT_THEME_PARTICLES = {
  number: {
    value: 20,
    density: {
      enable: true,
      value_area: 800,
    },
  },
  color: {
    value: '#f54500',
  },
  opacity: {
    value: 5,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 4,
    random: true,
    anim: {
      enable: true,
      speed: 3,
      size_min: 2,
      sync: false,
    },
  },
  links: {
    enable: true,
    color: '#f54500',
    distance: 50,
    width: 3,
    consent: false,
  },
  move: {
    enable: true,
    speed: 2,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

export const DARK_THEME_PARTICLES = {
  number: {
    value: 100,
    density: {
      enable: true,
      area: 1000,
    },
  },
  move: {
    enable: true,
    direction: 'right',
    speed: 1,
  },
  size: {
    value: 1,
  },
  opacity: {
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.05,
    },
  },
};

function Particle() {
  const { dark } = useThemeContext();

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  return (
    <ReactParticles
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;