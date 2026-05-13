"use client";

export function ArmSilhouette({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="armGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3F3F46" />
            <stop offset="100%" stopColor="#18181C" />
          </linearGradient>
          <filter id="armGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Base */}
        <ellipse cx="200" cy="455" rx="90" ry="14" fill="#27272D" />
        <rect x="150" y="410" width="100" height="40" rx="6" fill="url(#armGrad)" />

        {/* Joint 1 */}
        <circle cx="200" cy="408" r="18" fill="#3F3F46" />
        <circle cx="200" cy="408" r="6" fill="#00D4FF" opacity="0.85">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Link 1 (lower) */}
        <g style={{ transformOrigin: "200px 408px" }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-12 200 408"
            to="12 200 408"
            dur="9s"
            repeatCount="indefinite"
            additive="sum"
            keyTimes="0;0.5;1"
            values="-12 200 408;12 200 408;-12 200 408"
          />
          <rect x="188" y="280" width="24" height="135" rx="6" fill="url(#armGrad)" />

          {/* Joint 2 */}
          <circle cx="200" cy="285" r="16" fill="#3F3F46" />
          <circle cx="200" cy="285" r="5" fill="#00D4FF" opacity="0.85">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Link 2 (upper) */}
          <g style={{ transformOrigin: "200px 285px" }}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-18 200 285"
              to="18 200 285"
              dur="7s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              values="-18 200 285;18 200 285;-18 200 285"
            />
            <rect x="190" y="170" width="20" height="120" rx="6" fill="url(#armGrad)" />

            {/* Joint 3 */}
            <circle cx="200" cy="174" r="14" fill="#3F3F46" />
            <circle cx="200" cy="174" r="4" fill="#00D4FF" opacity="0.85">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Forearm */}
            <g style={{ transformOrigin: "200px 174px" }}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="-22 200 174"
                to="22 200 174"
                dur="5s"
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
                values="-22 200 174;22 200 174;-22 200 174"
              />
              <rect x="192" y="80" width="16" height="100" rx="5" fill="url(#armGrad)" />
              {/* End-effector */}
              <rect x="186" y="60" width="28" height="22" rx="4" fill="#3F3F46" />
              <circle cx="200" cy="56" r="6" fill="#00D4FF" filter="url(#armGlow)">
                <animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
