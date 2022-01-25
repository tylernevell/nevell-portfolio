import { WorkHighlight } from '../../components/work-highlight/work-highlight';
import { WorkTitle } from '../../components/work-title/work-title';
import { workHighlightContent } from '../../components/work-highlight/work-highlight-content';
import { LineBreak } from '../../components/line-break/line-break';
import { WorkAbout } from '../../components/work-about/work-about';
import { workAboutContent } from '../../components/work-about/work-about-content';
import { WorkArticle } from '../../components/work-article/work-article';
import { workArticleContent } from '../../components/work-article/work-article-content';
import { TeamBubbles } from '../../components/team-bubbles/team-bubbles';
import { rancupTeam } from '../../components/team-bubbles/rancup-team-content';

// TODO: Add link to Rancup.com
// TODO: Add what's next section

const Rancup = () => {
  return (
    <>
      <WorkTitle title="RancUp" />
      <WorkHighlight workContent={workHighlightContent[0]} />
      <LineBreak label="Meet the Team" />
      <TeamBubbles teammates={rancupTeam} />
      <LineBreak label="About" />
      <WorkAbout workAboutContent={workAboutContent} />
      <WorkArticle workArticleContent={workArticleContent[0]} />
    </>
  );
};

export default Rancup;
