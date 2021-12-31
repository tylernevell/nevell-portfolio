import { NavBar } from "../components/nav-bar/nav-bar";
import { linkItems } from "../components/nav-bar/link-items";

const Articles = () => {
  return (
    <main className="flex flex-1 h-screen bg-primary-default -z-10">
      <NavBar links={linkItems} />
    </main>
  );
};

export default Articles;
