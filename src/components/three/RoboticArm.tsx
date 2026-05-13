"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ArmSilhouette } from "./ArmSilhouette";

const ACCENT = "#00D4FF";
const BODY_COLOR = "#E4E4E7";

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function BodyMaterial() {
  return (
    <meshStandardMaterial
      color={BODY_COLOR}
      roughness={0.4}
      metalness={0.25}
    />
  );
}

function JointMaterial({ intensity = 2.5 }: { intensity?: number }) {
  return (
    <meshStandardMaterial
      color={ACCENT}
      emissive={ACCENT}
      emissiveIntensity={intensity}
      toneMapped={false}
    />
  );
}

function ArmRig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const baseRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!baseRef.current) return;
    // cursor yaw ±25°, plus slow idle ±8° over 14s
    const cursorYaw = mouse.current.x * 0.436;
    const idleYaw = Math.sin((t * Math.PI * 2) / 14) * 0.14;
    const target = clamp(cursorYaw + idleYaw, -0.436, 0.436);
    baseRef.current.rotation.y = lerp(baseRef.current.rotation.y, target, 0.06);
  });

  return (
    <group position={[0, 0, 0]}>
      <group ref={baseRef}>
        {/* Base — flat cylinder on the floor */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.8, 0.9, 0.3, 32]} />
          <BodyMaterial />
        </mesh>

        {/* Dim accent ring — flush near the floor */}
        <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.88, 0.015, 12, 64]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </mesh>

        {/* J1 — yaw joint */}
        <mesh position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.28, 24, 24]} />
          <JointMaterial />
        </mesh>

        {/* Shoulder bracket */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.5, 0.6, 0.5]} />
          <BodyMaterial />
        </mesh>

        {/* J2 — shoulder pitch */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.26, 24, 24]} />
          <JointMaterial />
        </mesh>

        {/* Upper arm — tilted forward 25° */}
        <group position={[0, 1.2, 0]} rotation={[Math.PI / 7, 0, 0]}>
          <mesh position={[0, 0.9, 0]}>
            <boxGeometry args={[0.35, 1.7, 0.35]} />
            <BodyMaterial />
          </mesh>

          {/* J3 — elbow */}
          <mesh position={[0, 1.85, 0]}>
            <sphereGeometry args={[0.24, 24, 24]} />
            <JointMaterial />
          </mesh>

          {/* Forearm — bent forward ~99° at the elbow */}
          <group position={[0, 1.85, 0]} rotation={[-Math.PI * 0.55, 0, 0]}>
            <mesh position={[0, 0.75, 0]}>
              <boxGeometry args={[0.28, 1.4, 0.28]} />
              <BodyMaterial />
            </mesh>

            {/* J4 — wrist roll */}
            <mesh position={[0, 1.55, 0]}>
              <sphereGeometry args={[0.2, 24, 24]} />
              <JointMaterial />
            </mesh>

            {/* Wrist housing */}
            <mesh position={[0, 1.8, 0]}>
              <boxGeometry args={[0.32, 0.3, 0.32]} />
              <BodyMaterial />
            </mesh>

            {/* J5 — wrist pitch */}
            <mesh position={[0, 2.05, 0]}>
              <sphereGeometry args={[0.18, 24, 24]} />
              <JointMaterial />
            </mesh>

            {/* End effector */}
            <mesh position={[0, 2.3, 0]}>
              <boxGeometry args={[0.22, 0.4, 0.22]} />
              <BodyMaterial />
            </mesh>

            {/* Tool point — brightest tip */}
            <mesh position={[0, 2.55, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <JointMaterial intensity={3} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

export function RoboticArm() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="w-full h-full"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 2 - 1;
        const y = ((e.clientY - r.top) / r.height) * 2 - 1;
        mouse.current.x = clamp(x, -1, 1);
        mouse.current.y = clamp(y, -1, 1);
      }}
      onMouseLeave={() => {
        mouse.current.x = 0;
        mouse.current.y = 0;
      }}
    >
      <Suspense fallback={<ArmSilhouette />}>
        <Canvas
          camera={{ position: [4, 3.5, 6], fov: 35 }}
          onCreated={({ camera }) => camera.lookAt(0, 1.6, 0)}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 6, 5]} intensity={1.4} color="#ffffff" />
          <pointLight position={[-3, 3, 4]} intensity={2.5} color={ACCENT} />
          <pointLight position={[2, 1, -3]} intensity={0.6} color="#ffffff" />
          <ArmRig mouse={mouse} />
        </Canvas>
      </Suspense>
    </div>
  );
}
