"use client";

/**
 * PixelClouds - Animated pixel-art clouds for a cozy, lo-fi aesthetic
 *
 * Features:
 * - Pure CSS animations for optimal performance
 * - Parallax effect with multiple layers
 * - Respects prefers-reduced-motion
 * - Theme-aware opacity
 */

interface Cloud {
  id: number;
  size: "small" | "medium" | "large" | "xlarge";
  version: 1 | 2; // Two possible versions for each size
  duration: number; // seconds
  delay: number; // seconds
  top: string; // percentage
}

const clouds: Cloud[] = [
  // Reduced to 15 clouds for better performance
  { id: 1, size: "small", version: 1, duration: 50, delay: 0, top: "8%" },
  { id: 5, size: "xlarge", version: 1, duration: 100, delay: 25, top: "5%" },
  { id: 2, size: "medium", version: 2, duration: 70, delay: 8, top: "18%" },
  { id: 3, size: "large", version: 1, duration: 90, delay: 15, top: "25%" },
  { id: 4, size: "small", version: 2, duration: 55, delay: 20, top: "32%" },
  { id: 6, size: "medium", version: 1, duration: 65, delay: 30, top: "38%" },
  { id: 8, size: "large", version: 2, duration: 85, delay: 40, top: "35%" },
  { id: 7, size: "small", version: 1, duration: 52, delay: 35, top: "48%" },
  { id: 10, size: "xlarge", version: 2, duration: 95, delay: 50, top: "55%" },
  { id: 11, size: "small", version: 2, duration: 58, delay: 55, top: "62%" },
  { id: 12, size: "large", version: 1, duration: 88, delay: 60, top: "68%" },
  { id: 13, size: "medium", version: 1, duration: 72, delay: 65, top: "75%" },
  { id: 15, size: "xlarge", version: 2, duration: 92, delay: 75, top: "78%" },
  { id: 20, size: "xlarge", version: 1, duration: 98, delay: 100, top: "82%" },
  { id: 22, size: "small", version: 1, duration: 51, delay: 110, top: "90%" },
];

export function PixelClouds() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden [--mask-gradient:linear-gradient(to_right,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.22)_100%)] lg:[--mask-gradient:linear-gradient(to_right,black_0%,black_10%,rgba(0,0,0,0.8)_20%,rgba(0,0,0,0.4)_25%,rgba(0,0,0,0.22)_30%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.4)_75%,rgba(0,0,0,0.8)_80%,black_90%,black_100%)]"
      aria-hidden="true"
      style={{
        maskImage: "var(--mask-gradient)",
        WebkitMaskImage: "var(--mask-gradient)",
      }}
    >
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="animate-cloud absolute"
          style={{
            top: cloud.top,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `-${cloud.delay}s`,
            willChange: "transform",
          }}
        >
          <PixelCloud size={cloud.size} version={cloud.version} />
        </div>
      ))}
    </div>
  );
}

interface PixelCloudProps {
  size: "small" | "medium" | "large" | "xlarge";
  version: 1 | 2;
}

/**
 * Individual pixel-art cloud component
 * Detailed pixel patterns for authentic retro aesthetic
 */
function PixelCloud({ size, version }: PixelCloudProps) {
  const sizeClasses = {
    small: "w-20 h-12",
    medium: "w-28 h-16",
    large: "w-36 h-20",
    xlarge: "w-44 h-24",
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0">
        {/* Small clouds */}
        {size === "small" && version === 1 && (
          <>
            {/* Top of cloud - rounded puffy top */}
            <div className="absolute top-1 left-7 h-1 w-4 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-5 h-1 w-8 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-4 h-1 w-10 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-3 h-1 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-2 h-1 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-1 w-15 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-2 h-1 w-15 bg-black/20 dark:bg-white/15" />
            {/* Bottom of cloud - flatter bottom */}
            <div className="absolute top-8 left-3 h-1 w-13 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === "small" && version === 2 && (
          <>
            {/* Top of cloud - split top with two bumps */}
            <div className="absolute top-1 left-3 h-1 w-4 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-1 left-10 h-1 w-5 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-2 h-1 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-9 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-2 h-1 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-1 h-1 w-16 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-1 h-1 w-16 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-1 h-1 w-16 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-2 h-1 w-14 bg-black/20 dark:bg-white/15" />
            {/* Bottom of cloud - flatter bottom */}
          </>
        )}

        {/* Medium clouds */}
        {size === "medium" && version === 1 && (
          <>
            {/* Top of cloud - asymmetric with left bump higher */}
            <div className="absolute top-1 left-8 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-6 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-5 h-1 w-15 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-4 h-1 w-18 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-3 h-1 w-21 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-1 w-23 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-2 h-1 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-2 h-1 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-1 w-23 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-3 h-1 w-21 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-4 h-1 w-18 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === "medium" && version === 2 && (
          <>
            {/* Top of cloud - three bumps across the top */}
            <div className="absolute top-1 left-5 h-1 w-5 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-1 left-12 h-1 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-4 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-11 h-1 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-3 h-1 w-22 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-2 h-1 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-1 h-1 w-26 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-1 h-1 w-26 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-1 h-1 w-25 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-1 h-1 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-1 w-22 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-3 h-1 w-19 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {/* Large clouds */}
        {size === "large" && version === 1 && (
          <>
            {/* Top of cloud - wide flat top with bumps on sides */}
            <div className="absolute top-1 left-10 h-1 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-1 left-20 h-1 w-8 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-8 h-1 w-9 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-18 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-7 h-1 w-23 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-6 h-1 w-25 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-5 h-1 w-27 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-4 h-1 w-29 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-3 h-1 w-31 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-2 h-1 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-1 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-2 h-1 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-2 h-1 w-31 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-3 h-1 w-29 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-4 h-1 w-26 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === "large" && version === 2 && (
          <>
            {/* Top of cloud - tall narrow cloud with single peak */}
            <div className="absolute top-1 left-19 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-17 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-15 h-1 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-12 h-1 w-18 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-10 h-1 w-21 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-9 h-1 w-23 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-7 h-1 w-25 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-5 h-1 w-27 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-4 h-1 w-29 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-3 h-1 w-31 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-3 h-1 w-31 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-3 h-1 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-4 h-1 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-14 left-5 h-1 w-25 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {/* XLarge clouds */}
        {size === "xlarge" && version === 1 && (
          <>
            <div className="absolute top-1 left-12 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-10 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-8 h-1 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-24 h-1 w-10 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-7 h-1 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-6 h-1 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-5 h-1 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-4 h-1 w-36 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-3 h-1 w-38 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-1 w-40 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-2 h-1 w-40 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-2 h-1 w-40 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-2 h-1 w-39 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-3 h-1 w-37 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-14 left-4 h-1 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-15 left-6 h-1 w-30 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === "xlarge" && version === 2 && (
          <>
            <div className="absolute top-1 left-8 h-1 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-1 left-16 h-1 w-7 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-6 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-17 h-1 w-11 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-5 h-1 w-29 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-4 h-1 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-3 h-1 w-36 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-1 w-39 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-1 h-1 w-42 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-1 h-1 w-42 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-1 h-1 w-42 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-1 h-1 w-41 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-2 h-1 w-39 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-3 h-1 w-37 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-4 h-1 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-14 left-6 h-1 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-15 left-6 h-1 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-16 left-8 h-1 w-24 bg-black/20 dark:bg-white/15" />
          </>
        )}
      </div>
    </div>
  );
}
