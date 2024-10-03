import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/p2.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";
import project5 from "../assets/projects/p5.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT1 = `I’m a Web Developer 
and a Cloud Enthusiast who loves designing, coding, and 
deploying projects. I'm passionate about exploring 
new technologies and taking on diverse challenges.`;

export const ABOUT_TEXT2 = `I recently graduated from a 
Post-Graduate Cloud Computing program and am currently
 diving deep into cloud 
technologies like AWS, Google Cloud, Docker, and Kubernetes.💻

I love creating digital spaces that look good and work even better.`;

export const EXPERIENCES = [
  {
    year: "Jan'2024 - Aug'2024",
    role: "Post-Grad Certificate in Cloud Computing",
    company: "Humber College (Faculty of Applied Science and Technology)",
    description: `Studied AWS, GCP, Azure, with hands-on experience in Docker, Kubernetes, Terraform, and Ansible. Completed projects in cloud architecture, big data, and DevOps.`,
    type: ["Education"],
  },
  {
    year: "Jan'2023 - Dec'2023",
    role: "Post-Grad Certificate in Web Development",
    company: "Humber College (Faculty of Creative Media and Arts)",
    description: `Completed full-stack web development program covering ASP.NET, MERN stack, PHP, and Laravel, with a focus on responsive design, usability testing, and project management.`,
    type: ["Education"],
  },
  {
    year: "Jan'2022 - April'2022",
    role: "Backend Developer Intern",
    company: "SCIKEY - India (On-site)",
    description: `Developed backend features with Node.js, Express, and MySQL, improving data retrieval speed and deployment efficiency.`,
    type: ["Work Experience"],
  },
  {
    year: "June'2019 - Nov'2022",
    role: "Digital Media Manager",
    company: "The First Feet Fotography Studio (Remote)",
    description: `Boosted engagement and reach through strategic content, and targeted ad campaigns while managing social media with Buffer.`,
    type: ["Work Experience"],
  },
  {
    year: "June'2019 - May'2022",
    role: "Bachelor of Science in Information Technology",
    company: "Auro University",
    description: `Studied programming, database management, and networking with a focus on Linux, web development, and information security.`,
    type: ["Education"],
  },


];

export const PROJECTS = [
  {
    title: "Smart Cities Weather Dashboard ↗",
    image: project1,
    description:
    `A real-time weather app with 3D Map, AI-generated city insights, 5-day forecasts, and latest updates(24h), 
    deployed globally using AWS Amplify and Elastic Beanstalk.`,
    technologies: ["React.js", "Tailwind CSS", "AWS Elastic Beanstalk", "ChatGPT API", "AI", "Vercel AI SDK", "3D Map", "Docker"],
    link: "https://github.com/AnjiCodes",
  },
  {
    title: "Bookager - Cloud Deployed Book Management App ↗",
    image: project2,
    description:
    `Serverless, cloud-based book management app with secure MFA, allowing users to add, update,
     and delete books. Deployed on AWS with Node.js and HTML/CSS, offering scalability, security, and a clean, responsive interface.`, 
    technologies: ["Node.js", "HTML", "CSS", "AWS Lambda","DynamoDB","Amazon Cognito", "API Gateway","Amazon S3"],
    link: "https://github.com/AnjiCodes/aws-books-lamdafunction-main",
  },
  {
    title: "MovieGenX - Movie Recommendation App ↗",
    image: project3,
    description:
      `A movie recommendation platform that suggests films based on user preferences, including genres, directors, 
      actors, and ratings. It refines recommendations through user feedback and provides similar movie discovery. 
      Built with a focus on personalization and user engagement.`,
      technologies: ["Django", "React.js", "TMDB API", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/KenanGain/moviedjangoai",
  },
  {
    title: "ArtInspire - A Tool to Break Creative-Blocks  ↗",
    image: project4,
    description:
    `A user-friendly web platform designed to help artists overcome creative blocks 
    with features like an Art Idea Generator, personal note space, and Questionnaire form. 
    Built using the MERN stack with a focus on creativity and user engagement.`,
    technologies: ["Full-Stack App","MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JavaScript", "JWT", "Postman API Platform"],
    link: "https://github.com/AnjiCodes/Capstone_ArtInspire",
  },
  {
    title: "Customer Segmentation🔒",
    image: project5,
    description:
    `This project is a hands-on experiment where I'm learning new tools like AWS Glue, S3, 
    Redshift, and SageMaker. My goal is to improve my skills in predicting customer behavior
    and understanding marketing strategies.`,    
    technologies: ["Framer Motion", "React.js", "AWS S3", "AWS SageMaker", "AWS Glue", "Redshift", "SQL"],
    link: "#",
  },
];

export const CONTACT = {
  address: "Toronto, CA ",
  phoneNo: "+12 4555 666 00 ",
  email: "anjali.mahida25@gmail.com",
};
