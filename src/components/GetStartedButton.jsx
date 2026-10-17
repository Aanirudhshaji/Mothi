import { ArrowRight } from "lucide-react";

const sizeStyles = {
  default: {
    height: "h-14",
    label: "px-8 text-lg",
    arrow: "h-14 w-14",
    icon: "h-8 w-8",
  },
  compact: {
    height: "h-12",
    label: "px-6 text-sm",
    arrow: "h-12 w-12",
    icon: "h-7 w-7",
  },
};

export default function GetStartedButton({
  onClick,
  size = "default",
  className = "",
}) {
  const styles = sizeStyles[size] ?? sizeStyles.default;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex w-fit shrink-0 items-center rounded-full text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7D2D] focus-visible:ring-offset-2 ${className}`}
    >
      <span
        className={`${styles.height} flex flex-1 items-center justify-center rounded-full bg-[#5B7D2D] font-semibold transition-colors duration-200 group-hover:bg-[#4E6D27] ${styles.label}`}
      >
        Get Started
      </span>
      <span
        aria-hidden="true"
        className={`${styles.arrow} -ml-0.5 flex shrink-0 items-center justify-center rounded-full bg-[#5B7D2D] transition-colors duration-200 group-hover:bg-[#4E6D27]`}
      >
        <ArrowRight className={`${styles.icon} transition-transform duration-200 group-hover:translate-x-1`} strokeWidth={1.5} />
      </span>
    </button>
  );
}
