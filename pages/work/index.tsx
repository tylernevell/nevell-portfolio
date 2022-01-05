import { Container } from "../../components/container/container";
import { linkItems } from "../../components/nav-bar/link-items";
import { NavBar } from "../../components/nav-bar/nav-bar";
import { workItems } from "../../components/work-item/content";
import { WorkItem } from "../../components/work-item/work-item";

const Work = () => {
  return (
    <>
      <NavBar links={linkItems} />
      <Container className="mt-32 lg:mt-48">
        {workItems.map((workItem) => (
          <WorkItem {...workItem} />
        ))}
      </Container>
    </>
  );
};

export default Work;
