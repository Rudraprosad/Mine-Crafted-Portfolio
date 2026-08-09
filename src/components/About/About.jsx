import "./About.scss";
import Button from "./Button/Button";

const aboutMeData = {
  one: {
    name: "rudra prosad paul",
    imageUrl: "/images/me.webp",
    externalLink: "https://github.com/Rudraprosad",
    resumelink:"https://drive.google.com/file/d/1mYnucwfFKh1q22FVpFbQFU3chmWrcbvS/view?usp=sharing",
    content: [
      {
        header: "About Me",
        paragraphs: [
          "Hey there👋! Thanks for stopping by <3!!! My name is Rudra. I love coding, building cool things, and creating something meaningful.",
          "I am a Full Stack Developer and Machine Learning enthusiast with a strong foundation in C++, Python, Advanced Data Structures and Algorithms, and modern web technologies.",
          "I enjoy building scalable, interactive, and user-focused applications that combine strong backend architecture with engaging frontend experiences.",
          "My development experience includes HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL, Tailwind CSS, Three.js, React Three Fiber, GSAP, and Lenis.",
          "I have worked on complete full-stack applications involving authentication, REST APIs, database management, payment integration, deployment, and responsive UI development.",
        ],
      },
      {
        header: "Experiences & Projects",
        paragraphs: [
          " - I am particularly interested in 3D web development and creative interactive experiences, using technologies such as Three.js, React Three Fiber, Blender, and GSAP to create immersive web applications.",
          " - I have also developed DevOrbit, a KPI-based freelancer dashboard for managing clients, projects, tasks, jobs, and earnings.",
          " - Alongside web development, I work with Machine Learning using Python and Scikit-learn.",
          " - One of my key projects is an AI-based Transformer Health Monitoring System, where I developed an ensemble-learning approach to analyze physical and electrical parameters and classify transformer health conditions.",
          " - The system combines multiple bagging and boosting models with a Logistic Regression meta-learner to improve prediction reliability.",
          " - I am also an Open Source contributor and actively strengthen my problem-solving skills through Data Structures and Algorithms and competitive programming.",
          " - I achieved 3rd position at the college level of Smart India Hackathon 2025, reflecting my ability to collaborate, solve real-world problems, and build practical technical solutions.",
          " - I am continuously learning and looking for opportunities to build high-quality software, contribute to meaningful projects, and solve challenging engineering problems across full-stack development, 3D web experiences, and machine learning."
        ],
      },
    ],
  },
};

const About = () => {
  const data = aboutMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="data-container">
      <div className="image-wrapper">
        <img src={data.imageUrl} alt={data.name} className="data-image" />
      </div>

      <Button href={data.externalLink} type={"link"}>
        View my Github!
      </Button>

      {data.content.map((section, index) => (
        <div key={index} className="data-section">
          <h2 className="about-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      {/* <div className="image-wrapper-two">
        <img
          src="/images/inprogress.webp"
          alt={"My Resume"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">
        - - My Resume - -
      </p> */}

      {/* <div className="image-wrapper-two">
        <img
          src="/images/crochet.webp"
          alt={"Real Men"}
          className="data-image-two"
        />
      </div> */}
      
      <div className="image-wrapper-3">
        <img
          src="/images/inprogress.webp"
          alt={"My Resume"}
          className="data-image"
        />
      </div>
      <p className="section-paragraph">- - My Resume- -</p>
      <Button href={data.resumelink} type={"link"}>
        View Full Resume
      </Button>
    </div>
  );
};

export default About;