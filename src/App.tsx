import React, { useState, FC } from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import "./styles.css";

import devs from "./devs.png";
import buildings from "./ttst.png";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
  radius: () => Math.random() * 0.5 + 0.8,
  mass: () => 50,
  friction: () => 0.09,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const buildingsOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 250;
  },
  color: ({ x, y, image }) => "#ffffff",
  radius: () => 1,
  mass: () => 50,
  friction: () => 0.09,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 20);
};

export default function App() {
  //const { innerWidth, innerHeight } = useWindowSize();
  const [innerWidth, setInnerWidth] = useState(500);
  const [innerHeight, setInnerHeight] = useState(500);

  return (
    <>
      <ParticleImage
        src={devs}
        width={innerWidth}
        height={innerHeight}
        scale={2}
        entropy={50}
        maxParticles={3000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="#191D1F"
      />
      <ParticleImage
        src={buildings}
        width={1000}
        height={innerHeight}
        scale={2}
        entropy={10}
        maxParticles={2000}
        particleOptions={buildingsOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="#191D1F"
      />
    </>
  );
}
