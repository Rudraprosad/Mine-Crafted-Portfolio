import "./Project.scss";

import Button from "../Button/Button";


const projectData = {
  one: {
    name: "Transformer Health Prediction",
    imageUrl: "/images/intution.webp",
    externalLink: "https://github.com/Rudraprosad/Transformer-Health-prediction-AI",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "Models: Random Forest, XGBoost, AdaBoost, LightGBM",
          "Ensemble: Weighted Soft Voting and Stacking with Logistic Regression meta-learner",
          "Preprocessing: StandardScaler, Label Encoding, Median Imputation, SMOTE",
          "Evaluation: Accuracy, Classification Report, Prediction Confidence"
        ],
      },
    ],
  },
  two: {
    name: "CloudPoint",
    imageUrl: "/images/develop-plan.webp",
    externalLink: "https://github.com/Rudraprosad/cloudPoint-",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "Once you see something that really inspires you, it can come across as a dream or something unachievable.",
          "Don't worry, you can make that thing too. It'll just take sometime. The biggest issue is not knowing the path or where to take the first step. In this video, I take a really amazing website and show you how you can break down a website that inspires you into a self-learning plan so you have an order and structure to learn from.",
          "Soon, you will be able to make the website you want!!! Just believe in yourself and stick to the plan! You got this 💪💪💪!!! I was very very slow and confused when I first started programming. If you're a newer programmer, the only difference between me and you is time!",
        ],
      },
    ],
  },
  three: {
    name: "Healthcare Portal",
    imageUrl: "/images/multiplayer-game.webp",
    externalLink: "https://github.com/Rudraprosad/DBMS-based-Health-care-portal-using-Mysql",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "Ever wanted to make a multiplayer game? In this video I describe how to make a fairly simple multiplayer game with a limited tech stack. It's not paticularly robust for larger games, but for a prototyping workflow it definitely works out well. Some concepts also transfer over to larger projects though.",
        ],
      },
      {
        header: "Tech featured in project",
        paragraphs: [" - Squoosh", " - Heroku", " - three.js", " - Blender"],
      },
    ],
  },
  four: {
    name: "Mine-Crafted Portfolio",
    imageUrl: "/images/immersive-world.webp",
    externalLink: "https://github.com/Rudraprosad/Mine-Crafted-Portfolio",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "This project is outdated 😳😳 but I left it in here... woops haha. I cover a little bit about octree and first person controls.",
        ],
      },
    ],
  },
};

const Project = ({ projectID }) => {
  const project = projectData[projectID];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />
      </div>

      <Button href={project.externalLink} type={"link"}>
        github repo
      </Button>

      {project.content.map((section, index) => (
        <div key={index} className="project-section">
          <h2 className="project-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

    
    </div>
  );
};

export default Project;