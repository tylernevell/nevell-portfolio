import { Container } from '../../components/container/container';
import { workItems } from '../../components/work-item/content';
import { WorkItem } from '../../components/work-item/work-item';

const Work = () => {
  return (
    <>
      <Container className="mt-32 lg:mt-48">
        {workItems.map((workItem) => (
          <WorkItem {...workItem} />
        ))}
      </Container>
    </>
  );
};

export default Work;
