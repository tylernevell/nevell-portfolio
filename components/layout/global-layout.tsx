import type { FunctionComponent, ReactNode } from 'react';
import { memo } from 'react';
import { useRouter } from 'next/router';
import { linkItems } from '../nav-bar/link-items';
import { NavBar } from '../nav-bar/nav-bar';

type PropsType = {
  children: ReactNode;
};
const GlobalLayout: FunctionComponent<PropsType> = ({ children }) => {
  const router = useRouter();

  return (
    <main>
      {router.asPath === '/' ? '' : <NavBar links={linkItems} />}
      <div className="flex flex-wrap h-full w-full">{children}</div>
    </main>
  );
};

const MemoGlobalLayout = memo(GlobalLayout);

export { MemoGlobalLayout as GlobalLayout };
