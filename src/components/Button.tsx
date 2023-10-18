import classNames from "classnames";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

type Variant = "primary" | "secondary";
type Size = "xs" | "sm" | "base" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "base" | "lg";
};

export const buttonClassName = ({
  variant = "primary",
  size = "base",
}: {
  size?: Size;
  variant?: Variant;
} = {}) =>
  classNames(
    "rounded-lg border text-center font-medium  shadow-sm transition-all focus:ring focus:ring-blue-200 disabled:cursor-not-allowed",
    {
      "px-3 py-1.5 text-xs": size === "xs",
      "px-5 py-2.5 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "base",
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "border-blue-500 bg-blue-500 text-white hover:border-blue-700 hover:bg-blue-700 disabled:border-blue-300 disabled:bg-blue-300":
        variant === "primary",
      "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-200 disabled:border-gray-200 disabled:bg-gray-200":
        variant === "secondary",
    },
  );

const Button: FunctionComponent<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={classNames(
        buttonClassName({
          size,
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export default Button;
