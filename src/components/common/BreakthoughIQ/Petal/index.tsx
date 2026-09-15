"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  cubicBezier,
  AnimationPlaybackControlsWithThen,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function Petal({ active }: { active: boolean }) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progress = useMotionValue(0);
  const controlsRef = useRef<AnimationPlaybackControlsWithThen | null>(null);

  const [hasActivated, setHasActivated] = useState(false);

  const easingFn = cubicBezier(0.42, 0.14, 0.6, 0.86);
  const totalDuration = 4;

  const easedProgress = useTransform(progress, easingFn);

  const x = useTransform(easedProgress, (p) => {
    const length = pathRef.current?.getTotalLength() || 0;
    const point = pathRef.current?.getPointAtLength(p * length) || {
      x: 95,
      y: 4,
    };
    return point.x;
  });

  const y = useTransform(easedProgress, (p) => {
    const length = pathRef.current?.getTotalLength() || 0;
    const point = pathRef.current?.getPointAtLength(p * length) || {
      x: 95,
      y: 2,
    };
    return point.y;
  });

  useEffect(() => {
    if (active) {
      setHasActivated(true);
      progress.set(0);
      controlsRef.current = animate(progress, 1, {
        duration: totalDuration,
        ease: "linear",
        repeat: Infinity,
      });
    } else if (hasActivated) {
      controlsRef.current?.stop();

      const current = progress.get();
      const remaining = 1 - current;
      const remainingDuration = remaining * totalDuration;

      animate(progress, 1, {
        duration: remainingDuration,
        ease: "linear",
      });
    }
    return () => controlsRef.current?.stop();
  }, [active, progress, hasActivated]);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 190 300"
        className="max-width-full h-full w-full"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          ref={pathRef}
          d="M 95,2 A 93,148 0 1,1 95,298 A 93,148 0 1,1 95,2"
          fill={active ? "#bfa87d1a" : "transparent"}
          stroke={active ? "#fff" : "#C0A97E"}
          strokeWidth="1"
          style={{ transition: "stroke 0.3s ease, fill 0.3s ease" }}
        />
        <motion.circle r="4" fill="#FF5B35" cx={x} cy={y} />
      </svg>
    </div>
  );
}
export default Petal;
