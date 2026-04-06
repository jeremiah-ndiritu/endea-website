export const EndeaLogomark = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors"
  >
    {/* The Cube (Background Structure) using Deep Slate / Light Border */}
    <path
      d="M16 4L26 9.5V20.5L16 26L6 20.5V9.5L16 4Z"
      stroke="var(--color-border)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-[#1e293b]"
    />
    <path
      d="M16 14.5L26 9.5M16 14.5L6 9.5M16 14.5V26"
      stroke="var(--color-border)"
      strokeWidth="1.5"
      className="dark:stroke-[#1e293b]"
    />

    {/* The Portal Loop (Accent) */}
    <path
      d="M14 11.5L11 14.5L14 17.5"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 14.5H19C20.1046 14.5 21 15.3954 21 16.5C21 17.6046 20.1046 18.5 19 18.5"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
