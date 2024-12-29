"use client";
import { createContext, useContext, useState } from "react";

type ParticleContextType = {
  particles: Array<{ x: number; y: number; speed: number }>;
  setParticles: (
    particles: Array<{ x: number; y: number; speed: number }>,
  ) => void;
};

const ParticleContext = createContext<ParticleContextType | undefined>(
  undefined,
);

export function ParticleProvider({ children }: { children: React.ReactNode }) {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; speed: number }>
  >([]);

  return (
    <ParticleContext.Provider value={{ particles, setParticles }}>
      {children}
    </ParticleContext.Provider>
  );
}

export function useParticles() {
  const context = useContext(ParticleContext);
  if (!context)
    throw new Error("useParticles must be used within ParticleProvider");
  return context;
}
