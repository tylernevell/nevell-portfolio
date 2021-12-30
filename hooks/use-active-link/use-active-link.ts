import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useIsActiveLink = (href: string) => {
  const { isReady, pathname } = useRouter();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    setActive(pathname === `${href}`);
  }, [isReady, pathname, href]);

  return isActive;
};
export { useIsActiveLink };
