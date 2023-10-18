import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

type DisclosureProps = {
  className?: string;
  summary: ReactNode;
  children: ReactNode;
};

const Disclosure: FunctionComponent<DisclosureProps> = ({
  className,
  summary,
  children,
}) => {
  return (
    <details className={classNames("group", className)}>
      <summary className="flex cursor-pointer list-none justify-between border-b border-transparent font-semibold text-gray-700 transition-colors hover:text-blue-700 group-open:border-gray-200">
        <span>{summary}</span>

        <ChevronRightIcon className="h-6 w-6 text-gray-400 transition group-open:rotate-90 group-open:text-gray-700" />
      </summary>
      <div className="py-4">{children}</div>
    </details>
  );
};

export default Disclosure;
