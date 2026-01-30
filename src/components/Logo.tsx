export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="dev-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
      </defs>
      <path
        d="M120 200 L40 100 L80 100 L120 155 L160 100 L200 100 Z"
        fill="url(#dev-grad)"
        opacity="0.4"
      />
      <path
        d="M120 170 L55 85 L90 85 L120 125 L150 85 L185 85 Z"
        fill="url(#dev-grad)"
        opacity="0.7"
      />
      <path
        d="M120 140 L70 70 L100 70 L120 97 L140 70 L170 70 Z"
        fill="url(#dev-grad)"
      />
      <rect x="70" y="45" width="100" height="6" rx="3" fill="#1e40af" />
    </svg>
  );
}
