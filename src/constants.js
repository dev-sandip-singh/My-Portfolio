// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import infosysLogo from './assets/company_logo/infosysLogo.jpg';



// Education Section Logo's
import kamlanehrulogo from './assets/education_logo/kamla nehru logo.jpg';
import hirmanlogo from './assets/education_logo/hirman logo.jpg';


// Project Section Logo's
import quickassistparklogo from './assets/work_logo/quickassistparklogo.jpg';
import medialertailogo from './assets/work_logo/medialertailogo.jpg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo:springbootLogo},
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: infosysLogo,
      role: "Fullstack Developer",
      company: "Infosys",
      date: "Feb 6, 2025 – Apr 10, 2025",
      desc: "Worked on the Quick Assist Park project, focusing on efficient parking assistance solutions. Developed backend services using Spring Boot, ensuring high performance and scalability. Built dynamic web pages using Thymeleaf for real-time user interaction and seamless UI integration.",
      skills: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      ],
    },    
  ];
  
  export const education = [
    {
      id: 0,
      img: kamlanehrulogo,
      school: "Kamla Nehru Institute of Technology, Sultanpur",
      date: "Sept 2023 - July 2025",
      grade: "8.2 CGPA",
       desc: "I have completed my Master's degree  (MCA)   in Computer Applications from Kamla Nehru       Institute of Technology, Sultanpur. During my time at KNIT, I built a strong foundation in programming, data structures, software engineering, and web technologies. I studied key subjects like Algorithms, Object-Oriented Programming, DBMS, and Full Stack Development. I actively took part in coding competitions, technical workshops, and collaborative projects that enriched my learning and technical proficiency. My time at KNIT played a vital role in developing both my academic and practical skills.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: hirmanlogo,
      school: "Hiraman Mahatam Mahavidyalaya, Mahuadeeh, Deoria",
       date: "July 2019 – July 2022",
       desc: "I completed my Bachelor's degree in Science (B.Sc. with Mathematics) from Hiraman Mahatam Mahavidyalaya, Mahuadeeh, Deoria. During this period, I gained a solid foundation in mathematical concepts, logical reasoning, and analytical problem-solving. My academic experience helped shape a strong quantitative mindset, which supports my work in software development and programming.",
     degree: "Bachelor of Science - B.Sc. (Mathematics)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Quick-Assst Park",
      description:
        "Quick-Assist Park is a smart parking management system built to streamline the process of booking, tracking, and managing parking spots. Developed using Java and Spring Boot, it includes real-time availability checks, user-friendly booking UI with Thymeleaf, and a robust backend to ensure smooth and scalable parking operations.",
      image: quickassistparklogo,
      tags: [ "Java","Spring Boot", "JavaScript","Thymeleaf", "MySQL","HTML", "CSS",],
      github: "https://github.com/dev-sandip-singh/quick-park-assist",
    },
    {
      id: 1,
      title: "Medi-Alert-AI",
      description:
        "MedicalAlert AI is an intelligent healthcare management platform that enables real-time emergency alerts, doctor-patient coordination, and medical record tracking. Designed to assist patients and healthcare providers, it offers features like doctor availability status, personalized notifications, and secure data handling to ensure timely and efficient medical support.",
      image: medialertailogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/dev-sandip-singh/MediAlert-AI",
    },
  ];  