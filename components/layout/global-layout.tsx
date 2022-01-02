import type { FunctionComponent, ReactNode } from "react";
import { memo } from "react";

type PropsType = {
  children: ReactNode;
};
const GlobalLayout: FunctionComponent<PropsType> = ({ children }) => {
  return (
    <main className="bg-primary-default">
      <div className="flex flex-wrap bg-primary-default h-full w-full">
        {children}
      </div>
    </main>
  );
};

const MemoGlobalLayout = memo(GlobalLayout);

export { MemoGlobalLayout as GlobalLayout };
