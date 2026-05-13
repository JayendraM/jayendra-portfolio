"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArmSilhouette } from "./ArmSilhouette";

const RoboticArm = dynamic(
  () => import("./RoboticArm").then((m) => m.RoboticArm),
  {
    ssr: false,
    loading: () => (
      <ArmSilhouette className="w-full h-full flex items-center justify-center" />
    ),
  },
);

export function RoboticArmClient() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) {
    return <ArmSilhouette className="w-full h-full flex items-center justify-center" />;
  }

  if (!isDesktop) {
    return <ArmSilhouette className="w-full h-full flex items-center justify-center" />;
  }

  return <RoboticArm />;
}
