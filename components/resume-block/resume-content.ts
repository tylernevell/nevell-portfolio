import { ResumeBlockPropsType, ResumeItemPropsType } from "./types";

const experiences: ResumeItemPropsType[] = [
  {
    place: "RancUp",
    title: "Software Engineer",
    dateRange: "July 2021 - Today",
    description:
      "Tasked with building out the full scope of RancUp's functionality within the web application.",
  },
  {
    place: "Redko",
    title: "Full Stack Developer Intern",
    dateRange: "May 2021 - August 2021",
    description:
      "Work on building, maintaining, and refactoring Redko's React Native Applications.",
  },
  {
    place: "Jack's Surfboards",
    title: "Sales Associate",
    dateRange: "October 2019 - March 2020",
    description:
      "Assist customers in purchasing apparel and surfing equipment.",
  },
  {
    place: "Layton Construction",
    title: "Project Engineer",
    dateRange: "February 2017 - January 2018",
    description:
      "Worked on and helped manage Hospital Renovations in Colorado.",
  },
  {
    place: "Layton Construction",
    title: "Intern",
    dateRange: "May 2016 - August 2016",
    description: "Intern at the Aurora Medical Center renovation project.",
  },
  {
    place: "United Interests",
    title: "Intern",
    dateRange: "November 2014 - March 2014",
    description: "Assist with Marketing and Tour management of our musicians.",
  },
  {
    place: "UBS Group AG",
    title: "Intern",
    dateRange: "May 2014 - August 2014",
    description: "Provide financial reports and market research.",
  },
  {
    place: "Reuben's Burger Bistro",
    title: "Waiter",
    dateRange: "May 2013 - August 2013",
    description: "Wait on, buss, and seat customers.",
  },
  {
    place: "Synergy Audio and Video",
    title: "Waiter",
    dateRange: "May 2013 - August 2013",
    description: "Assist with onsite installations and warehouse management.",
  },
];

const education: ResumeItemPropsType[] = [
  {
    place: "University of Colorado Boulder",
    title: "B.S. Computer Science",
    dateRange: "January 2018 - December 2020",
    description:
      "Built the core of my programming skills through the study of foundational computational studies such as Data Structures, Algorithms, Theoretics of Formal Languages and Automata, Discrete Structures, Analysis, Data Science, Data Systems, etc.",
  },
  {
    place: "University of Colorado Boulder",
    title: "B.S. Business Administration - Marketing",
    dateRange: "August 2011 - December 2016",
    description:
      "To build a foundation of ethical business standards and an understanding of the needs and wants of consumers.",
  },
  {
    place: "Army and Navy Academy",
    title: "High School Diploma",
    dateRange: "June 2011",
    description: "",
  },
];

const technicalSkills: string[] = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Storybook",
  "Sanity",
  "OAuth 2.0",
  "CDNs and CMSs",
  "Git/Github",
  "RESTful APIs",
  "jQuery",
  "Redux",
  "Groq",
  "UI Development",
  "CSS",
  "HTML",
  "i18n",
  "a11y",
];

const interests: string[] = [
  "Web Development",
  "Photography",
  "International Travel",
  "Guitar",
  "Live Music",
  "Surfing",
  "Videogames",
  "Camping",
  "Golf",
  "Technology",
];

const socials = [
  {
    place: "Github",
    url: "https://www.github.com/tylernevell",
    linkText: "/tylernevell",
  },
  {
    place: "LinkedIn",
    url: "https://www.linkedin.com/in/tylernevell/",
    linkText: "Tyler Nevell",
  },
  {
    place: "Instagram",
    url: "https://www.instagram.com/tylernevell/?hl=en",
    linkText: "@tylernevell",
  },
];

const resumeContent: ResumeBlockPropsType = {
  experiences,
  education,
  technicalSkills,
  interests,
  socials,
};

export { resumeContent };
