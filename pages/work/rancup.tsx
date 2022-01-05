import { NavBar } from "../../components/nav-bar/nav-bar";
import { linkItems } from "../../components/nav-bar/link-items";
import { WorkHighlight } from "../../components/work-highlight/work-highlight";
import { WorkTitle } from "../../components/work-title/work-title";
import { workHighlightContent } from "../../components/work-highlight/work-highlight-content";
import { LineBreak } from "../../components/line-break/line-break";
import { WorkAbout } from "../../components/work-about/work-about";
import { workAboutContent } from "../../components/work-about/work-about-content";

// TODO: Add link to Rancup.com
// TODO: Add what's next section

const Rancup = () => {
  return (
    <>
      <NavBar links={linkItems} />
      <WorkTitle title="RancUp" />
      <WorkHighlight workContent={workHighlightContent[0]} />
      <LineBreak label="About" />
      <WorkAbout workAboutContent={workAboutContent} />
    </>
  );
};

export default Rancup;
