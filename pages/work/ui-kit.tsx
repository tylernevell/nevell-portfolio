import { WorkTitle } from '../../components/work-title/work-title';
import { WorkHighlight } from '../../components/work-highlight/work-highlight';
import { workHighlightContent } from '../../components/work-highlight/work-highlight-content';

const UIKit = () => {
  return (
    <>
      <WorkTitle title="UI Kit" />
      <WorkHighlight workContent={workHighlightContent[1]} />
    </>
  );
};

export default UIKit;
