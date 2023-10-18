import { FunctionComponent, ReactNode } from "react";

type FieldProps = {
  label: ReactNode;
  children: ReactNode;
};

const Field: FunctionComponent<FieldProps> = ({ label, children }) => {
  return (
    <label>
      <span className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </span>
      {children}
    </label>
  );
};

export default Field;
