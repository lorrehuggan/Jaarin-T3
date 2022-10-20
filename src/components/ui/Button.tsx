import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  theme:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "invisible";
  size: "sm" | "md" | "lg" | "xl";
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  onClick,
  theme,
  size,
}) => (
  <button
    className={clsx("color-transition rounded font-bold", {
      "bg-primary hover:bg-base-light hover:text-base-dark":
        theme === "primary",
      "border-[0.25px] border-base-light/20 hover:border-primary hover:bg-primary":
        theme === "primary-outline",
      "hover:bg-base bg-base-light text-base-dark hover:text-base-light":
        theme === "secondary",
      "hover:bg-base-light hover:text-base-dark": theme === "invisible",
      "py-1 px-2 text-xs": size === "sm",
      "py-1 px-4 text-sm": size === "md",
      "py-3 px-6": size === "lg",
    })}
    onClick={onClick}
  >
    {children ? children : text}
  </button>
);

export default Button;
