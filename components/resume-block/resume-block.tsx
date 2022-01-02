import Link from "next/link";
import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "../button/button";
import { Container } from "../container/container";
import { Typography } from "../typography/typography";
import { ResumeItem } from "./resume-item";
import type { ResumeBlockPropsType } from "./types";

const ResumeBlock: FunctionComponent<ResumeBlockPropsType> = (props) => {
  const {
    experiences,
    education,
    // awards,
    technicalSkills,
    interests,
    socials,
  } = props;

  const numOfExperiences = experiences.length;
  const start = numOfExperiences > 4 ? 5 : numOfExperiences;

  const [limit, setLimit] = useState(start);

  const hideAll = useCallback(() => setLimit(start), [setLimit, start]);

  const showAll = useCallback(() => {
    if (numOfExperiences > 10) {
      setLimit(10);
    } else if (numOfExperiences > 5) {
      setLimit(numOfExperiences);
    }
  }, [numOfExperiences, setLimit]);

  const toggleLimit = limit === start ? showAll : hideAll;
  const toggleText = limit === start ? "Show more" : "Hide the";

  return (
    <Container>
      <section className="container relative grid grid-cols-6 lg:grid-cols-12 lg:gap-2">
        <div className="col-span-6 lg:col-span-3 mb-8 lg:mb-0">
          <Typography
            variant="h3"
            size="text-3xl"
            color="text-secondary-active"
            fontFamily="font-mono"
          >
            Experiences
          </Typography>
          <ul>
            {experiences.slice(0, limit).map((experience) => (
              <ResumeItem {...experience} />
            ))}
          </ul>
          <Button type="button" onClick={toggleLimit}>
            {toggleText} humble beginnings
          </Button>
        </div>
        <div className="col-span-6 lg:col-span-1" />
        <div className="col-span-6 lg:col-span-3">
          <Typography
            variant="h3"
            color="text-secondary-active"
            size="text-3xl"
            fontFamily="font-mono"
          >
            Education
          </Typography>
          <ul>
            {education.map((study) => (
              <ResumeItem {...study} />
            ))}
          </ul>
          {/* <div className="border-t border-secondary-focus mt-8 mb-2 w-10">
            {" "}
          </div> */}
          {/* <Typography variant="h3" size="text-3xl" fontFamily="font-mono">
            Awards
          </Typography>
          <ul>
            {awards.map((award) => (
              <ResumeItem {...award} />
            ))}
          </ul> */}
        </div>
        <div className="col-span-6 lg:col-span-1" />
        <div className="col-span-6 lg:col-span-3">
          <Typography
            color="text-secondary-active"
            variant="h3"
            size="text-3xl"
            fontFamily="font-mono"
          >
            Technical
          </Typography>
          <Typography
            color="text-secondary-active"
            variant="p"
            className="my-8"
          >
            {technicalSkills.join(", ")}
          </Typography>
          <Typography
            color="text-secondary-active"
            variant="h3"
            size="text-3xl"
            fontFamily="font-mono"
          >
            Interests
          </Typography>
          <Typography
            color="text-secondary-active"
            variant="p"
            className="my-8"
          >
            {interests.join(", ")}
          </Typography>
          <Typography
            color="text-secondary-active"
            variant="h3"
            size="text-3xl"
            fontFamily="font-mono"
          >
            Social
          </Typography>
          <ul>
            {socials.map(({ place, url, linkText }) => (
              <li className="flex flex-col my-4">
                <Typography color="text-secondary-active" variant="span">
                  {place}
                </Typography>
                <Link href={url}>
                  <a className="text-blue-600">{linkText}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};

ResumeBlock.defaultProps = {
  experiences: [],
  education: [],
  // awards: [],
  technicalSkills: [],
  interests: [],
  socials: [],
};

export { ResumeBlock };
