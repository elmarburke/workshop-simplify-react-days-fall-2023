import classNames from "classnames";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonClassName = classNames(
  "rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300",
);

const Button: FunctionComponent<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={classNames(buttonClassName, className)} {...props} />
  );
};

export default Button;
