import { FunctionComponent, ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge: FunctionComponent<BadgeProps> = ({ children }) => {
  return (
    <span className="bg-primary-50 text-primary-600 rounded-full px-2 py-1 text-xs font-semibold">
      {children}
    </span>
  );
};

export default Badge;
