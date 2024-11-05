import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  icon?: ReactNode;
}

export const Button = ({
  href,
  onClick,
  children,
  className = "",
  type = "button",
  icon,
  ariaLabel,
}: ButtonProps) => {
  const commonClasses = `bg-blue-400 text-white text-xs font-bold px-6 py-2 mt-1 inline-block text-center ${className}`;

  const content = (
    <div className="flex items-center justify-center text-sm">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-blue-500 text-white px-4 py-2 ${commonClasses}`}
    >
      {content}
    </button>
  );
};
