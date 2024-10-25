import project4 from "../assets/projects/project1.png"
import project1 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project3.png";
import project2 from "../assets/projects/project2.png"
import code from "../assets/projects/code.png"

export const HERO_CONTENT = `
  I am a JAVA Developer enthusiast passionate about building dynamic and scalable websites. My techstack include Java , SpringBoot , AWS and other modern technologies, and I love solving DSA problems on LeetCode. Currently, I'm enhancing my skills in SprinBoot, best practices for building robust applications.
  Check out my projects on GitHub and connect with me on Twitter to follow my journey in the tech world.
`;



export const ABOUT_TEXT = `
  I'm Anushree Srivastava, a passionate Java Developer and problem solver with a keen interest in exploring the tech world 
  and continuously learning new technologies. I specialize in SpringBoot , Cloud Computing(AWS) and more to build dynamic and scalable applications.
  Education:
  - BE in Computer Engineering from Babu Banarasi Das University (2021 - 2025) - CGPA: 9.3/10. 
  I'm always open to new opportunities and collaborations. Feel free to reach out!
`;



export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "AWS CLOUD COMPUTING STUDENT TRAINEE",
    company: "The Ikigai Lab",
    description: `Gained practical experience with AWS services, including VPC, NAT, Internet Gateways, and secure public/private networks. Worked on auto-scaling, load balancing, RDS, S3, and EFS. Optimised content delivery with CloudFront and implemented CloudWatch for monitoring. This experience enhanced my skills in cloud architecture, scalability, and DevOps principles, positioning me to contribute to cloud infrastructure optimisation and performance enhancement in future roles.`,
    technologies: ["AWS","VPC","NAT","INTERNET GATEWAY","AUTOSCALING","LOAD BALANCING","RDS","EFS","CLOUD FRONT","CLOUD WATCH"],
  },
];


export const PROJECTS = [
  {
    title: "AWS PROJECT DOCUMENTATION",
    image: project3, 
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7216836377156411393/",
     link: "",
     description:
       "Configured a VPC with NAT Gateway, Internet Gateway, and autoscaling for real-time traffic management, reducing downtime by 25% . Set up RDS , EFS , and S3 for secure storage solutions, and leveraged CloudFront for optimized content delivery. Enabled CloudWatch for monitoring, providing real-time insights into performance and system health, enhancing overall stability and scalability.",
     technologies: ["AWS","VPC","NAT","INTERNET GATEWAY","AUTOSCALING","LOAD BALANCING","RDS","EFS","CLOUD FRONT","CLOUD WATCH"],
    },
    {
      title: "E-COMMERCE WEBSITE",
      image: project2, 
      github: "https://github.com/Anushree2702/ECOMMERCE-WEBSITE",
       link: "",
       description:
         "Developed a full-stack e-commerce application using Java Spring Boot(backend), React (frontend), and H2 database. The platform supports adding, updating, and deleting products with image handling, implementing robust CRUD operations and a responsive UI. Improved product management efficiency by 30% , reducing manual handling time through automation.",
       technologies: ["JAVA","SPRING BOOT","H2 DATABASE","REACT","POSTMAN"],
      },
  {
    title: "Movie Recommender System",
    image: project4,
    github: "https://github.com/Anushree2702/Movie-Recommender-System-using-PYTHON",
    description:
      "Developed a movie recommender web app by using Python, Jupyter Notebook, and Python library (Streamlit) "+
      "Developed a machine learning model that classified user viewing behaviours and correlated them with relevant content"+
      "This initiative resulted in a 30% reduction in content churn and markedly improved retention rates."+
      "Key Highlights:"+
      "Utilized collaborative filtering and content-based filtering techniques to provide personalized movie recommendations. "+
      "Processed and analyzed a large dataset to extract meaningful insights using Pandas and NumPy."+
      "Implemented the recommendation engine using Python and Scikit-learn."+
      "Visualized data trends and patterns using Matplotlib and Seaborn."+
      "This project not only strengthened my understanding of recommendation algorithms but also provided valuable experience in end-to-end project execution, from data preprocessing to model deployment.",
    technologies: ["Python", "Jupyter Notebook", "Streamlit(Python library)", "Pandas", "Scikit-learn", "Seaborn"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    github: "https://github.com/Kamna16/MyPortfolio",
    link: "https://kamna-portfolio.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion","Tailwind"],
  },
  {
    title: "HOSPITAL CHATBOT",
    image: code,
    link:"",
    description: " Developed a chatbot using IBM Watson Assistant to automate appointment scheduling and simplify patient inquiries. Enabled patients to book appointments and receive specialist information from home. Increased appointment scheduling efficiency by 40% and improved patient satisfaction with 20% fewer administrative delays.",
    technologies: ["IBM", "IBM WATSON ASSISTANT"],
  },
 
  
];

export const CONTACT = {
  phoneNo: "+91-9336362355",
  email: "pramodpoonamsrivastava65@gmail.com",
  address: "Lucknow , UttarPradesh - India"
};