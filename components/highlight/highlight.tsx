import { VoidFunctionComponent } from "react";
import { ContentGroup } from "../content-group/content-group";
import { Img } from "../media/img/img";
import { content } from "../content-group/content";
import { Container } from "../container/container";

const Highlight: VoidFunctionComponent = () => {
  return (
    <Container>
      <div className="container relative mx-auto mt-20">
        <div className="relative grid grid-cols-6 gap-x-4 mx-auto">
          <div className="flex items-center pl-1 lg:pl-0 col-span-6 lg:col-span-3 order-2 lg:order-none">
            <ContentGroup {...content} />
          </div>
          <div className="col-span-6 lg:col-span-3 order-1 lg:order-none pb-8 lg:pb-0">
            <Img layout="responsive" isPriority={true} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Highlight };
