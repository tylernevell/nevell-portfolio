import { FunctionComponent } from 'react';
import { Img } from '../media/img/img';
import { Container } from '../container/container';
import type { WorkArticleContentPropsType } from './work-article-content';
import { Typography } from '../typography/typography';

type PropsType = {
  workArticleContent: WorkArticleContentPropsType;
};

const WorkArticle: FunctionComponent<PropsType> = (props) => {
  const { workArticleContent } = props;
  const paragraphs = workArticleContent.content.subHeading;

  return (
    <Container>
      <div className="container relative mx-auto mt-8">
        <section className="relative grid grid-cols-6 gap-x-4 mx-auto">
          <section className="col-span-6 order-1 pb-8 lg:pb-24">
            <Img
              imgSrc={workArticleContent.img.imgSrc}
              width={workArticleContent.img.width}
              height={workArticleContent.img.height}
              layout="responsive"
            />
          </section>
          <section className="pl-1 lg:pl-0 flex items-center col-span-6 order-2">
            <article className="relative flex items-center">
              <header className="lg:pr-6 py-4">
                <Typography
                  variant="h2"
                  size="text-3xl"
                  fontFamily="font-mono"
                  textAlign="text-center"
                  className="mb-5 font-semibold"
                  {...workArticleContent.content.heading}
                />
                {paragraphs.map((element, idx) => (
                  <Typography
                    variant="p"
                    size="text-lg"
                    fontFamily="font-sans"
                    className={idx < paragraphs.length - 1 ? 'pb-3' : ''}
                    {...element}
                  />
                ))}
              </header>
            </article>
          </section>
        </section>
      </div>
    </Container>
  );
};

export { WorkArticle };
