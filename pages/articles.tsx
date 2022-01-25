import { articleItems } from '../components/articles/articles';
import { Container } from '../components/container/container';
import { ArticleItem } from '../components/articles/article-item';

const Articles = () => {
  return (
    <>
      <Container className="mt-32 lg:mt-48">
        {articleItems.map((articleItem) => (
          <ArticleItem {...articleItem} />
        ))}
      </Container>
    </>
  );
};

export default Articles;
