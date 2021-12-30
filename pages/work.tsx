import { NavBar } from "../components/nav-bar/nav-bar";
import { linkItems } from "../components/nav-bar/link-items";

const Work = () => {
  return (
    <main className="flex flex-1 h-screen bg-primary-default">
      <NavBar links={linkItems} />
    </main>
  );
};

export default Work;
