import { NavBar } from '../../components/nav-bar/nav-bar';
import { linkItems } from '../../components/nav-bar/link-items';
import { WorkTitle } from '../../components/work-title/work-title';
import { WorkHighlight } from '../../components/work-highlight/work-highlight';
import { workHighlightContent } from '../../components/work-highlight/work-highlight-content';

const UIKit = () => {
  return (
    <>
      <NavBar links={linkItems} />
      <WorkTitle title="UI Kit" />
      <WorkHighlight workContent={workHighlightContent[1]} />
    </>
  );
};

export default UIKit;
