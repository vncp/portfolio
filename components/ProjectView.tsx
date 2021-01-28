import ProjectCard from "./ProjectCard";
import { Props as CardProps } from "./ProjectCard";
/*
const projectData: CardProps[] = [
  {
    projectName: "Portfolio Website",
    projectLinkTexts: [
      { href: "https://github.com/vncp/portfolio", text: "Github Link" },
    ],
    projectDescription:
      "This website! I worked really hard on it for a few days and amazed myself at how much I can learn and get done with just pure focus.",
    projectStart: "Start: 1/25/21",
    projectStatus: "mostly complete",
  },
];
*/
//projectData.map((cardData) => console.log(cardData));

const ProjectView = () => {
  return (
    <>
      <ProjectCard
        projectName="Portfolio Website"
        projectLinkTexts={[
          { href: "https://github.com/vncp/portfolio", text: "Github Link" },
        ]}
        projectDescription="This website! I worked really hard on it for a few days and amazed myself at how much I can learn in such a short time. Statically hosted using Firebase Hosting. Developed using NextJS and TypeScript."
        projectStart="Start: 1/25/21"
        projectStatus="80%"
      ></ProjectCard>
    </>
  );
};

export default ProjectView;
