import { Container } from '../../components/container/container';
import { workItems } from '../../components/work-item/content';
import { WorkItem } from '../../components/work-item/work-item';
import { WorkTitle } from '../../components/work-title/work-title';

const Work = () => {
  return (
    <>
      <WorkTitle title="Projects" />
      <Container className="mt-24">
        {workItems.map((workItem) => (
          <WorkItem {...workItem} />
        ))}
      </Container>
    </>
  );
};

export default Work;
