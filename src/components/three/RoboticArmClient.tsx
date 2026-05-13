"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArmSilhouette } from "./ArmSilhouette";

const RoboticArm = dynamic(
  () => import("./RoboticArm").then((m) => m.RoboticArm),
  {
    ssr: false,
    loading: () => <ArmSilhouette />,
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
    return <ArmSilhouette />;
  }

  if (!isDesktop) {
    return <ArmSilhouette />;
  }

  return <RoboticArm />;
}
