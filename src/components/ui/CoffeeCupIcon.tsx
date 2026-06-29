type CoffeeCupIconProps = {
  className?: string;
};

export function CoffeeCupIcon({ className = "h-4 w-4" }: CoffeeCupIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 4c0 .9-.55 1.45-.85 2.1" />
      <path d="M12 3c0 .9-.55 1.45-.85 2.1" />
      <path d="M15.5 4c0 .9-.55 1.45-.85 2.1" />
      <path d="M5.5 9.5h11.5v7.2a2.8 2.8 0 0 1-2.8 2.8H8.3a2.8 2.8 0 0 1-2.8-2.8V9.5z" />
      <path d="M17 11h1.6a2.2 2.2 0 0 1 0 4.4H17" />
      <path d="M4.5 20.5h15" />
    </svg>
  );
}
