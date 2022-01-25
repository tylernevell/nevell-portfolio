import { NavBar } from '../components/nav-bar/nav-bar';
import { linkItems } from '../components/nav-bar/link-items';
import { articleItems } from '../components/articles/articles';
import { Container } from '../components/container/container';
import { ArticleItem } from '../components/articles/article-item';

const Articles = () => {
  return (
    <>
      <NavBar links={linkItems} />
      <Container className="mt-32 lg:mt-48">
        {articleItems.map((articleItem) => (
          <ArticleItem {...articleItem} />
        ))}
      </Container>
    </>
  );
};

export default Articles;
