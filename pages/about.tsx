import { Highlight } from '../components/highlight/highlight';
import { LineBreak } from '../components/line-break/line-break';
import { ResumeBlock } from '../components/resume-block/resume-block';
import { resumeContent } from '../components/resume-block/resume-content';

// Add new years resolutions?

const About = () => {
  return (
    <>
      <Highlight />
      <LineBreak label="Resume" />
      <ResumeBlock {...resumeContent} />
    </>
  );
};

export default About;
