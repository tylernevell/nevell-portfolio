import { FunctionComponent } from "react";
import { Img } from "../media/img/img";
import { Container } from "../container/container";
import type { WorkAboutContentPropsType } from "./work-about-content";
import { Typography } from "../typography/typography";

type PropsType = {
  workAboutContent: WorkAboutContentPropsType;
};

const WorkAbout: FunctionComponent<PropsType> = (props) => {
  const { workAboutContent } = props;
  const paragraphs = workAboutContent.content.subHeading;

  return (
    <Container>
      <div className="container relative mx-auto mt-8">
        <div className="relative grid grid-cols-6 gap-x-4 mx-auto">
          <section className="pl-1 lg:pl-0 flex items-center col-span-6 lg:col-span-3 order-2 lg:order-none">
            <article className="relative flex items-center">
              <header className="lg:pr-6 py-4">
                <Typography
                  variant="h2"
                  size="text-3xl"
                  fontFamily="font-mono"
                  className="mb-5 font-semibold"
                  {...workAboutContent.content.heading}
                />
                {paragraphs.map((element, idx) => (
                  <Typography
                    variant="p"
                    size="text-lg"
                    fontFamily="font-sans"
                    className={idx < paragraphs.length - 1 ? "pb-3" : ""}
                    {...element}
                  />
                ))}
              </header>
            </article>
          </section>
          <section className="col-span-6 lg:col-span-3 order-1 lg:order-none pb-8 lg:pb-0">
            <Img
              imgSrc={workAboutContent.img.imgSrc}
              width={workAboutContent.img.width}
              height={workAboutContent.img.height}
              layout="responsive"
            />
          </section>
        </div>
      </div>
    </Container>
  );
};

export { WorkAbout };
