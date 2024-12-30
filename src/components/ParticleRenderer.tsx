"use client";
import { useEffect } from "react";
import { useParticles } from "@/context/ParticleContext";

const PARTICLE_COUNT = 50;

export default function ParticleRenderer() {
  const { particles, setParticles, showParticles } = useParticles();

  useEffect(() => {
    if (showParticles) {
      setParticles(
        Array.from({ length: PARTICLE_COUNT }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: 0.5 + Math.random() * 2,
        })),
      );
    } else {
      setParticles([]);
    }
  }, [setParticles, showParticles]);

  if (!showParticles) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-particle"
          style={{
            left: `${p.x}%`,
            bottom: `${p.y}%`,
            animationDuration: `${p.speed}s`,
          }}
        />
      ))}
    </div>
  );
}
