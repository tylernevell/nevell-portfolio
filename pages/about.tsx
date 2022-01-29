import { Highlight } from '../components/highlight/highlight';
import { LineBreak } from '../components/line-break/line-break';
import { RecentActivityBlock } from '../components/recent-activity/recent-list-block';
import { ResumeBlock } from '../components/resume-block/resume-block';
import { resumeContent } from '../components/resume-block/resume-content';

// Add new years resolutions?

const About = () => {
  return (
    <>
      <Highlight />
      <LineBreak label="Recent Activity" />
      <RecentActivityBlock />
      <LineBreak label="Resume" />
      <ResumeBlock {...resumeContent} />
    </>
  );
};

export default About;
