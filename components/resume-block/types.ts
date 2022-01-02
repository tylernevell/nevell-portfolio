type ResumeBlockPropsType = {
  experiences: ResumeItemPropsType[];
  education: ResumeItemPropsType[];
  // awards: ResumeItemPropsType[];
  technicalSkills: string[];
  interests: string[];
  socials: {
    place: string;
    url: string;
    linkText: string;
  }[];
};

type ResumeItemPropsType = {
  place: string;
  title: string;
  dateRange: string;
  description: string;
};

export type { ResumeBlockPropsType, ResumeItemPropsType };
