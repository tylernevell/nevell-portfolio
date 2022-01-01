import { NavBar } from "../components/nav-bar/nav-bar";
import { linkItems } from "../components/nav-bar/link-items";
import { Highlight } from "../components/highlight/highlight";
import { LineBreak } from "../components/line-break/line-break";
import { Container } from "../components/container/container";

const About = () => {
  return (
    <>
      <NavBar links={linkItems} />
      <Highlight />
      <LineBreak label="Resume" />
    </>
  );
};

export default About;
