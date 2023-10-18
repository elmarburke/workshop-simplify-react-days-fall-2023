import classNames from "classnames";
import { DetailedHTMLProps, FunctionComponent } from "react";

// all original input props
type InputProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: FunctionComponent<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={classNames(
        "block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
