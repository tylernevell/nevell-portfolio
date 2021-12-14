import type { FunctionComponent, ReactNode } from 'react';
import { memo } from 'react';

type PropsType = {
  children: ReactNode;
};
const GlobalLayout: FunctionComponent<PropsType> = ({ children }) => {
  return <>{children}</>;
};

const MemoGlobalLayout = memo(GlobalLayout);

export { MemoGlobalLayout as GlobalLayout };
