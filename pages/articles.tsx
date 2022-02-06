import { articleItems } from '../components/articles/articles';
import { Container } from '../components/container/container';
import { ArticleItem } from '../components/articles/article-item';
import { WorkTitle } from '../components/work-title/work-title';

const Articles = () => {
  return (
    <>
      <WorkTitle title="Articles I Enjoy" />
      <Container className="mt-24">
        {articleItems.map((articleItem) => (
          <ArticleItem {...articleItem} />
        ))}
      </Container>
    </>
  );
};

export default Articles;
