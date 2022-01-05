import { FunctionComponent } from "react";
import { ContentGroup } from "../content-group/content-group";
import { Img } from "../media/img/img";
import { Container } from "../container/container";
import type { WorkHighlightContentPropsType } from "./work-highlight-content";

type PropsType = {
  workContent: WorkHighlightContentPropsType;
};

const WorkHighlight: FunctionComponent<PropsType> = (props) => {
  const { workContent } = props;

  return (
    <Container>
      <div className="container relative mx-auto mt-8">
        <div className="relative grid grid-cols-6 gap-x-4 mx-auto">
          <div className="col-span-6 lg:col-span-3 order-1 lg:order-none pb-8 lg:pb-0">
            <Img
              imgSrc={workContent.img.imgSrc}
              width={workContent.img.width}
              height={workContent.img.height}
              layout="responsive"
              isPriority={true}
            />
          </div>
          <div className="pl-1 lg:pl-0 flex items-center col-span-6 lg:col-span-3 order-2 lg:order-none">
            <ContentGroup {...workContent.content} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { WorkHighlight };
