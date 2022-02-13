import { WorkTitle } from '../../components/work-title/work-title';
import { WorkHighlight } from '../../components/work-highlight/work-highlight';
import { workHighlightContent } from '../../components/work-highlight/work-highlight-content';
import { WorkArticle } from '../../components/work-article/work-article';
import { workArticleContent } from '../../components/work-article/work-article-content';
import { LineBreak } from '../../components/line-break/line-break';

const SpotifyClone = () => {
  return (
    <>
      <WorkTitle title="Spotify Clone" />
      <WorkHighlight workContent={workHighlightContent[1]} />
    </>
  );
};

export default SpotifyClone;
