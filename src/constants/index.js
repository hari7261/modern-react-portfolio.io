import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1, tictactoe, shopie, foodie, gitprofile, tictactoe1, tictactoe2, tictactoe3, shopie1, shopie2, shopie3, gitprofile1, gitprofile2, gitprofile3, codevision, codevision1, codevision2, codevision3, techfuture, techfuture1, techfuture2, techfuture3, responsive, react, fullstack, portfolio1, portfolio2, portfolio3, portfolio, python1, python2, python3,
  python,
  connectgame1,
  connectgame2,
  connectgame3,
  connectgamemain,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hariom-kumar-pandit-2k3/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100094695074245&sk=about',
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/me_hari3/',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/hari7261',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
  },
  {
    stack: ['libraries', 'all'],
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    stack: ['libraries', 'all'],
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
  {
    stack: ['libraries', 'all'],
    name: 'Matplotlib',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  },
  {
    stack: ['libraries', 'all'],
    name: 'Three.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  },

  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Docker',
    icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  // {
  //   stack: ['tools', 'all'],
  //   name: 'Postman',
  //   icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  // },
];

const projects = [
  {
    id: 1,
    name: 'Personal Portfolio',
    desc: 'I developed a personal portfolio website to showcase my skills, projects, and experiences in web development, data analytics, and competitive coding. The site features detailed sections on my education, technical proficiencies, and notable projects, demonstrating my commitment to continuous learning and problem-solving. I also include blog posts to share insights and knowledge on various technical topics. The portfolio reflects my dedication to both creative and technical aspects of software engineering.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: portfolio,
    carousel: [portfolio1, portfolio2, portfolio3],
    source_link: 'https://github.com/hari7261/Hariom--Portfolio',
    live_link: 'https://hari7261.github.io/Hariom--Portfolio/',
  },
  {
    id: 2,
    name: 'Python Projects',
    desc: 'I created the "MY-PYTHON-PROJECTS" repository to showcase my Python development skills. This repository includes projects like a Student Database CSV Generator using Tkinter, a House Price Prediction model using machine learning, and a YouTube Video Downloader script. These projects highlight my ability to build practical tools and work with data, reflecting my dedication to continuous learning and coding.',
    tech: ['python', 'Tensorflow', 'numpy', 'sklit-learn', ' matplitlib'],
    img: python,
    carousel: [python1, python2, python3],
    source_link: 'https://github.com/hari7261/MY-PYTHON-PROJECTS',
  },
  {
    id: 3,
    name: 'Connect 4 Game',
    desc: 'This project showcases a classic Connect 4 game, developed using HTML, CSS, and JavaScript. The game features an interactive grid where players compete to connect four discs in a row. With a responsive design crafted through CSS and dynamic game logic implemented in JavaScript, this project highlights my skills in front-end development and game design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: connectgamemain,
    carousel: [connectgame1, connectgame2, connectgame3],
    source_link: 'https://github.com/hari7261/Connect-4-Game',
    live_link: 'https://hari7261.github.io/Connect-4-Game/',
  },
  {
    id: 4,
    name: 'E-Commerce WebApp',
    desc: 'Shopie is a clean and simple one-page shopping website designed for an intuitive user experience. Built using HTML, CSS, and JavaScript, this project highlights a minimalist design approach, featuring essential sections like product listings, shopping cart, and a checkout form. The site is fully responsive, ensuring a seamless browsing experience on any device.',
    tech: ['HTML', 'CSS', 'JS'],
    img: shopie,
    carousel: [shopie1, shopie2, shopie3],
    source_link: 'https://github.com/hari7261/Shopie',
    live_link: 'https://hari7261.github.io/Shopie/',
  },
  {
    id: 5,
    name: 'Github-Profile-Finder',
    desc: 'GitHub Profile Finder is a web application built using Next.js that allows users to search for GitHub profiles easily. Simply enter a username, and the app fetches and displays detailed information about the user, including repositories, followers, and more. This project leverages the power of Next.js to deliver a fast and efficient user experience.',
    tech: ['Next.js', 'JavaScript', 'GitHub API'],
    img: gitprofile,
    carousel: [gitprofile1, gitprofile2, gitprofile3],
    source_link: 'https://github.com/hari7261/Github-Profile-Finder',
    live_link: 'https://github-profile-finder-orpin-nine.vercel.app/',
  },
  {
    id: 6,
    name: 'Food Recipe',
    desc: 'Foodie Recipes is a website for cooking enthusiasts. It is a Single Page App (SPA) that allows users to explore a variety of recipes, save their favorites, and get inspiration for their next meal',
    tech: ['Bootstrao', 'HTML', 'CSS', 'Javascript'],
    img: foodie,
    carousel: [python],
    source_link: 'https://github.com/hari7261/Foodie-recipe.io',
    live_link: 'https://hari7261.github.io/Foodie-recipe.io/',
  },
  {
    id: 7,
    name: 'Tic Tac Toe',
    desc: 'Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: 'https://github.com/hari7261/Tic-Toe-Game',
    live_link: 'https://hari7261.github.io/Tic-Toe-Game/',
  },
  {
    id: 8,
    name: 'CodeVision',
    desc: 'CodeVision is a web application designed for managing and securing personal information. The application offers features for tracking and organizing various types of personal data while ensuring privacy and security.',
    tech: ['CSS', 'HTML', 'JavaScript'],
    img: codevision,
    carousel: [codevision1, codevision2, codevision3],
    source_link: 'https://github.com/hari7261/CodeVision',
    live_link: 'https://hari7261.github.io/CodeVision/',
  },
  {
    id: 9,
    name: 'TechFutureEmpire',
    desc: '🌟 Key Features: Led by a dedicated Full Stack Developer, the site features major projects like a movie app, game, and calculator, with a focus on continuous learning and problem-solving through top coding platforms, ensuring cutting-edge technology and innovative solutions.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: techfuture,
    carousel: [techfuture1, techfuture2, techfuture3],
    source_link: 'https://github.com/hari7261/TechFutureEmpire',
    live_link: 'https://hari7261.github.io/TechFutureEmpire/',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Aditya panday',
    image: 'https://hari7261.github.io/TechFutureEmpire/assets/img/team/aditya.png',
    text: 'I really am comfortable with collaborating and coding with hari. His ingenious ideas give me a lot of ideas solving a problem multiple ways.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    name: 'Himanshu Kumar Vishwakarma',
    image: 'https://hari7261.github.io/TechFutureEmpire/assets/img/team/himanshu.jpg',
    text: "Throughout our collaboration, I was consistently impressed by hari's professionalism, attention to detail, and ability to adapt to changing requirements.",
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/',
  },
  {
    id: 3,
    name: 'Devanand Upadhyay',
    image: 'https://hari7261.github.io/TechFutureEmpire/assets/img/team/devanand.jpg',
    text: 'He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/devanand-upadhyay/',
  },
  {
    id: 4,
    name: 'Ashwin Sundar',
    image: 'https://hari7261.github.io/Hariom--Portfolio/assets/images/ashwin.png',
    text: 'His kindness and patience with his peers makes him easy to work with no matter the difficulty, and that reflects as well when it comes to helping others in his team or explaining something when need be',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/',
  },
  {
    id: 5,
    name: 'Anjali Kumari',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQFni5-RsXu1UA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1702833414463?e=1724263200&v=beta&t=xhA33PpHyZlKhZ2gcxIgZ1xXIGzKyIjW_dTF_zuizEQ',
    text: 'Communication was another strength that hari brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/anjali-kumari-099729267/',
  },
  {
    id: 6,
    name: 'Unknown',
    image: 'https://icon2.cleanpng.com/20180626/ehy/aazadnugz.webp',
    text: 'I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.',
    country: 'Unknown',
    linkedIn: 'https://www.google.com/search?q=who+is+Hariom+Kumar+Pandit&gs_ivs=1#tts=0',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
