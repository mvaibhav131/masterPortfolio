/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vaibhav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vaibhav More Portfolio",
    type: "website",
    url: "http://vaibhavmore.in/",
  },
};

//Home Page
const greeting = {
  title: "Vaibhav More",
  logo_name: "Vaibhav More",
  nickname: "Full Stack Developer",
  subTitle:
    "An enthusiastic Full Stack Developer driven by a relentless pursuit to craft comprehensive solutions that foster sustainable and scalable social and technical ecosystems, aiming to make a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1CSI_3idq1qYhGUnZdaT-h9atkFvORsPy/view?usp=sharing",
  portfolio_repository: "https://github.com/mvaibhav131",
  githubProfile: "https://github.com/mvaibhav131",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/mvaibhav131",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhav131/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TechGitaGyan",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/mvaibhav131",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mvaibhav131@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mvaibhav131",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mvaibhav131/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vaibhavmore1997/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux & NextJS.",
        "⚡ Developing mobile applications using React Native .",
        "⚡ Developing desktop applications using ElectronJS .",
        "⚡ Testing applications using Cypress,Jest,Selenium,Supertest,Mocha.",
        "⚡ Creating application backend in NodeJS, Express, NestJS.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#02569B",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "logos-webpack",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "skill-icons:tailwindcss-dark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Electron JS",
          fontAwesomeClassname: "logos:electron",
          style: {
            color: "#CB3800",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "NestJs",
          fontAwesomeClassname: "logos:nestjs",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Chai",
          fontAwesomeClassname: "logos:chai",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "logos:jest",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "logos:cypress-icon",
          style: {
            color: "#443399",
          },
        },
        {
          skillName: "Mocha",
          fontAwesomeClassname: "logos:mocha",
          style: {
            color: "#61KAFB",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying learning models on Netlify and Vercel.",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GoDaddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Insomnia",
          fontAwesomeClassname: "simple-icons:insomnia",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#4285N5",
          },
        },
      ],
    },
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Data Management & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Database Management and Queries handling in projects.",
      ],
      softwareSkills: [
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "simple-icons:mongoosedotws",
          style: {
            backgroundColor: "",
            color: "red",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Elastic Search",
          fontAwesomeClassname: "logos-elasticsearch",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos-redis",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/mvaibhav131/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vaibhavmore2018/",
    },
    {
      siteName: "Postman",
      iconifyClassname: "simple-icons:postman",
      style: {
        color: "orange",
      },
      profileLink: "https://www.postman.com/mvaibhav131",
    },
    {
      siteName: "Notion",
      iconifyClassname: "simple-icons:notion",
      style: {
        color: "black",
      },
      profileLink: "https://coderbyte.com/profile/mvaibhav131",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mvaibhav131",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/mvaibhav131",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@mvaibhav131",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mvaibhav131",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Savitribai Phule Pune University",
      subtitle: "B.E. in Mechanical Engineering",
      logo_path: "sppu_img.png",
      alt_name: "SPPU pune",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic mechanical engineering subjects like Thermodynamics,SOM,TOM,Design of Machine Element,NMO etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, DSA, Docker Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Scholarship which is given to top 10% of students in college. I have received award from respected MLA for consistently best performance in academics.",
      ],
      website_link: "http://www.unipune.ac.in/",
    },
    {
      title: "Maharashtra State Board of Technical Education",
      subtitle: "Diploma in Mechanical Engineering",
      logo_path: "msbte.png",
      alt_name: "MSBTE",
      duration: "2013 - 2016",
      descriptions: [
        "⚡ I learn the Fluid Mechanics and Machinery, Manufacturing Technology-I, Theory of Machines, Fluid Power Engineering, etc",
        "⚡ Apart from this, The subjects serve to familiarize with basic concepts of thermodynamics, solid mechanics, metallurgy, kinematics, control systems and even coding.",
        "⚡ During my time at university, I was also associated with workshop departments.",
      ],
      website_link: "https://msbte.org.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "Fullstack Development",
      subtitle: "- Masai School",
      logo_path: "masai_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "masai",
      color_code: "black",
    },
    {
      title: "Dockerization and Containerization",
      subtitle: "- Scalar Academy",
      logo_path: "scalar_logo.jpg",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "scalar",
      color_code: "white",
    },
    {
      title: "Data Structure & Algorithms",
      subtitle: "- Masai School",
      logo_path: "masai_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "masai",
      color_code: "black",
    },
  
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   // certificate_link:
    //   //   "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
   
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Typing (Silver)",
      subtitle: "- Ratatype",
      logo_path: "ratatype-cloud.webp",
      // certificate_link:
      //   "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "ratatype_logo.png",
      color_code: "gray",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
     {
      title: "Java Basics",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "hackerrank",
      color_code: "green",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Frontend and Backend Developer, Designer,Tester and Software Engineer. I have also worked with some well established companies mostly as Full Stack Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Esyasoft Technologies",
          company_url: "https://www.esyasoft.com/",
          logo_path: "esyasoft_logo.png",
          duration: "June 2023 - Present",
          location: "Bangalore, Karnataka",
          description:
            "In my current capacity as a Senior Software Engineer at Esyasoft Technology, I have taken on a leadership role in the frontend domain, leveraging React.js and Redux to architect sophisticated user interfaces that seamlessly integrate with backend systems. Additionally, I have harnessed the power of AWS and Node.js for efficient deployment and smooth functioning of applications. My proficiency extends to incorporating Swagger for meticulous API documentation and Jira for streamlined project management. To ensure code integrity, I've utilized SCSS for creating structured and visually appealing styles. As a senior team member, I've undertaken the responsibility of managing and coordinating tasks, drawing upon my comprehensive skill set. Furthermore, my dedication to quality assurance is reflected in my adept use of automation testing tools, ensuring code robustness and optimal user experiences.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "GrowthPal Technologies",
          company_url: "https://www.growthpal.com/",
          logo_path: "growthpal_logo.jpeg",
          duration: "Sept 2022 - June 2023",
          location: "Pune, Maharashtra",
          description:
            "Embarking on a new chapter at Growthpal Technology as a software engineer, I embraced a dynamic role that spanned both backend and frontend realms. In the backend landscape, I skillfully orchestrated operations utilizing a repertoire of technologies such as Swagger, Express.js, Node.js, AWS, and Kubernetes, elevating functionality and reliability. My proficiency further extended to automated testing, where I adeptly employed Jest, Mocha, and Supertest to ensure the robustness of the codebase. Simultaneously, in the frontend domain, I harnessed the power of React.js and Redux to craft immersive user interfaces, enhancing user experiences with responsive design and maintaining code scalability. Additionally, I employed SCSS to bring creativity and structure to the styles. My commitment to automation led me to utilize Cypress, an automation tool, which significantly streamlined testing processes",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/",
          logo_path: "cognizant_logo.jpeg",
          duration: "Nov 2021 - Sept 2022",
          location: "Pune, Maharashtra",
          description:
            "As a software developer at Cognizant, I held a pivotal role focused on database management, encompassing a wide spectrum from SQL and NoSQL to Oracle databases. I adeptly navigated through these diverse database technologies, harnessing their potential to enhance software solutions and drive optimal performance.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Engineer",
          company: "Fukoku India Pvt Ltd.",
          company_url: "https://www.fukoku-rubber.co.jp/english/product/index.html",
          logo_path: "fukoku_logo.png",
          duration: "May 2017 - Nov 2018",
          location: "Chakan, Maharashtra",
          description:
            "My internship journey further evolved at Fukoku India Pvt Ltd, where I held the position of a Technical Engineer. In this pivotal role, I took on the responsibility of ensuring product quality through meticulous testing and actively contributed to the assembly process. This experience not only heightened my technical acumen but also allowed me to contribute significantly to the operational efficiency and reliability of a diverse range of products.",
          color: "#000000",
        },
        {
          title: "Technical Intern",
          company: "Apurva Automobiles.",
          company_url: "https://jsdl.in/DT-49PH8SVW",
          logo_path: "apurva_logo.jpeg",
          duration: "Nov 2016 - Dec 2016",
          location: "Junnar, Maharashtra",
          description:
            "At Apurva Automobile, my role as a technical intern provided me with hands-on exposure to the intricate world of automotive mechanics. I delved into the diverse components that constitute an automobile and gained expertise in their assembly. This immersive experience equipped me with a practical understanding of the mechanical intricacies driving the automotive industry.",
          color: "#ee3c26",
        },
        {
          title: "Learning Intern",
          company: "Vidyarthi Computers",
          company_url:"https://jsdl.in/DT-49QGCJSJ",
          logo_path: "vidyarthi_logo.png",
          duration: "July 2019 - Dec 2019",
          location: "Junnar, Maharashtra",
          description:
            "During my internship tenure at Vidyathri Computers, I engaged in a valuable learning opportunity by focusing on improving my typing skills. This experience not only enhanced my proficiency in efficient keyboard usage but also laid a foundation for effective communication in the digital realm.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Contributor to Academic Research Dissemination: IJESRM Volunteer Project.",
          company: "IJESRM",
          company_url: "https://ijsrem.com/",
          logo_path: "ijsem.png",
          duration: "June 2019 - April 2020",
          location: "pune, Maharashtra",
          description:
            "Embarking on a meaningful volunteering journey, I was fortunate to contribute to a transformative project at IJESRM (International Journal of Engineering Science & Management Research). Within this role, I actively engaged in diverse responsibilities, including research assistance and content curation. Collaborating closely with esteemed professionals in the field, I played a vital part in the publication process, gaining valuable insights into the intricate world of academic research dissemination.",
          color: "#4285F4",
        },
        {
          title: "Showcasing Expertise: State Level Technophilia Paper Presentation",
          company: "MSBTE",
          company_url: "https://msbte.org.in/",
          logo_path: "msbte.png",
          duration: "Aug 2014 - May 2015",
          location: "pune, Maharashtra",
          description:
            "Participated in the State Level Technophilia Paper Presentation, where I showcased my research and communication skills through a well-received presentation on engineer project. This experience not only honed my ability to convey complex ideas effectively but also provided me with the opportunity to engage with fellow enthusiasts and experts in the field.",
          color: "#D83B01",
        },
        {
          title: "Technical Proficiencies in Action: Volunteering with AutoCAD, ProE, and CATIA",
          company: "Autodesk",
          company_url: "https://www.autodesk.com/",
          logo_path: "Autodesk-logos.webp",
          duration: "Oct 2018 - May 2020",
          location: "Junnar,Maharashtra",
          description:
            "Employing my certified skills in AutoCAD, ProE, and CATIA, I actively volunteered with jaihind College to contribute to design project. My expertise in these software tools enabled me to design the 3d parts, showcasing the practical application of my technical proficiencies for a meaningful cause.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Within my projects, I leverage a wide spectrum of state-of-the-art technology tools, encompassing both frontend and backend development. My forte lies in conceptualizing, building, and deploying web and mobile applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vaibhav_more.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DSA, React, Web & App Development,DB,Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@vaibhavmore24051997/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Shiroli Khurd, Junnar, T.A.-Junnar, Dist.-Pune, Maharashtra - 410511",
    locality: "Junnar",
    country: "IN",
    region: "Maharashtra",
    postalCode: "410511",
    streetAddress: "Shiroli Khurd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/PR1PVPj8czS59xiRA",
  },
  phoneSection: {
    title: "Email Me",
    subtitle: "mvaibhav131@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
