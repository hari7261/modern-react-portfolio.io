import{j as e,a,F as H,T as W}from"./react-tilt-ac89cc78.js";import{r as _,R as B}from"./react-199ba542.js";import{a as K}from"./react-dom-a3de5cd7.js";import{P as T}from"./prop-types-0c6b65e8.js";import{m as o,A as Y}from"./framer-motion-7e3cc864.js";import{M as U,T as Q,F as X,a as Z,P as ee,b as te,B as F}from"./react-icons-05904351.js";import{r as ne}from"./react-responsive-87d32f92.js";import{S as ie}from"./react-slick-91ce2199.js";/* empty css                       */import{u as ae,H as se,C as oe,P as ce,b as re,d as le,e as de}from"./@react-three-cb6e7cfc.js";import{i as me}from"./maath-a8442eea.js";import"./scheduler-765c72db.js";import"./lodash.debounce-4b5dce70.js";import"./classnames-63c61219.js";import"./resize-observer-polyfill-f6d40e45.js";import"./json2mq-d3ccca5e.js";import"./string-convert-c60507dd.js";import"./enquire.js-33edb58f.js";import"./@babel-98964cd2.js";import"./three-82afda36.js";import"./react-use-measure-56148341.js";import"./debounce-7fbb2940.js";import"./its-fine-9ef78fdf.js";import"./react-reconciler-4cf4b2a1.js";import"./zustand-61210a00.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=c(n);fetch(n.href,s)}})();const R=_.createContext(),O=({children:t})=>{const[i,c]=_.useState("dark"),l=()=>{c(n=>n==="dark"?"light":"dark")};return e(R.Provider,{value:{theme:i,toggleTheme:l},children:e("div",{className:`App ${i}`,children:t})})},V=()=>_.useContext(R);O.propTypes={children:T.node.isRequired};const S=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),p=(t,i,c,l)=>{let n,s;return t==="left"?n=100:t==="right"?n=-100:n=0,t==="up"?s=100:t==="down"?s=-100:s=0,{hidden:{x:n,y:s,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:i,delay:c,duration:l,ease:"easeOut"}},exit:{x:0,y:10,opacity:0}}},he=(t,i)=>({hidden:{scale:0,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay:t,duration:i,ease:"easeOut"}}}),j=(t,i,c,l)=>{let n,s;return t==="left"?n="-100%":t==="right"?n="100%":n=0,t==="up"?s="100%":t==="down"?s="-100%":s=0,{hidden:{x:n,y:s},show:{x:0,y:0,transition:{type:i,delay:c,duration:l,ease:"easeOut"}}}},L=(t,i)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:i||0}}}),_e="/assets/logo-50d6fe5c.png",M="/assets/light-bef9af7e.png",q="/assets/dark-3fe9091c.png",pe="/assets/facebook-52917ccc.png",ge="/assets/facebook (1)-2b95e18b.png",ue="/assets/github-c9477c30.png",ve="/assets/github (1)-a11c3607.png",fe="/assets/linkedin-c485396a.png",be="/assets/linkedin (1)-e61db1d1.png",ye="/assets/twitter-5805b2d2.png",we="/assets/twitter (1)-d5d22e96.png",ke="/assets/instagram-090853cb.png",Ne="/assets/instagram (1)-88a6c759.png",xe="/assets/connectgame-ea26fa02.png",$e="/assets/tictactoe-3ce827f5.png",Se="/assets/shopie-a437936b.png",Te="/assets/gitprofile-b03e10ab.png",ze="/assets/foodie-aa92dfaa.png",A="/assets/python-d227d0f7.jpg",Ce="/assets/techfutureempire-ce305ab5.png",je="/assets/portfolio-4274dc0b.png",Ie="/assets/codvision-1c7c8d40.png",Pe="/assets/portfolio (1)-9e73ce71.png",He="/assets/portfolio (2)-5644f7a3.png",Le="/assets/portfolio (3)-465f5b2a.png",Fe="/assets/connectgame1-c1cabd65.png",Me="/assets/connectgame2-62d93a70.png",qe="/assets/connectgame3-4616ad9e.png",Ae="/assets/tictactoe1-7ddf2e7a.png",Ee="/assets/tictactoe2-11ba3409.png",Re="/assets/tictactoe3-8d7421e7.png",Oe="/assets/gitprofile1-6da73a54.png",Ve="/assets/gitprofile-b03e10ab.png",De="/assets/gitprofile3-6204984c.png",Ge="/assets/shopie1-86204e67.png",Je="/assets/shopie2-9226ac58.png",We="/assets/shopie3-55ae1598.png",Be="/assets/python1-1f626e72.png",Ke="/assets/python2-62ac98cf.png",Ye="/assets/python3-c4638886.png",Ue="/assets/codvision (1)-283822b3.png",Qe="/assets/codvision (2)-fb8669f0.png",Xe="/assets/codvision (3)-49d79d36.png",Ze="/assets/techfuture (1)-dfecf58d.png",et="/assets/techfuture (2)-0c823a09.png",tt="/assets/techfuture (3)-3756f35d.png",nt="/assets/responsive-35cb8557.gif",it="/assets/react-23c4d31a.gif",at="/assets/fullstack-36c09759.gif",st=[{id:1,name:"LinkedIn",url:"https://www.linkedin.com/in/hariom-kumar-pandit-2k3/",icon:fe,icon1:be},{id:2,name:"Facebook",url:"https://www.facebook.com/profile.php?id=100094695074245&sk=about",icon:pe,icon1:ge},{id:3,name:"Instagram",url:"https://www.instagram.com/me_hari3/",icon:ke,icon1:Ne},{id:4,name:"Twitter",url:"https://twitter.com/",icon:ye,icon1:we},{id:5,name:"Github",url:"https://github.com/hari7261",icon:ue,icon1:ve}],ot=[{stack:["languages","all"],name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"},{stack:["languages","all"],name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"},{stack:["languages","all"],name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"},{stack:["languages","all"],name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"},{stack:["frameworks","all"],name:"Next.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"},{stack:["frameworks","all"],name:"Express.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},{stack:["tools","all"],name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"},{stack:["libraries","all"],name:"TensorFlow",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},{stack:["libraries","all"],name:"NumPy",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},{stack:["libraries","all"],name:"Matplotlib",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"},{stack:["libraries","all"],name:"Three.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"},{stack:["languages","all"],name:"Python",icon:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000"},{stack:["frameworks","all"],name:"React JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{stack:["frameworks","all"],name:"Redux Toolkit",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},{stack:["frameworks","all"],name:"Bootstrap",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"},{stack:["frameworks","all"],name:"Tailwind CSS",icon:"https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"},{stack:["tools","all"],name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"},{stack:["tools","all"],name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"},{stack:["tools","all"],name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{stack:["tools","all"],name:"Docker",icon:"https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"},{stack:["tools","all"],name:"Figma",icon:"https://www.vectorlogo.zone/logos/figma/figma-icon.svg"}],ct=[{id:1,name:"Personal Portfolio",desc:"I developed a personal portfolio website to showcase my skills, projects, and experiences in web development, data analytics, and competitive coding. The site features detailed sections on my education, technical proficiencies, and notable projects, demonstrating my commitment to continuous learning and problem-solving. I also include blog posts to share insights and knowledge on various technical topics. The portfolio reflects my dedication to both creative and technical aspects of software engineering.",tech:["HTML","CSS","JavaScript"],img:je,carousel:[Pe,He,Le],source_link:"https://github.com/hari7261/Hariom--Portfolio",live_link:"https://hari7261.github.io/Hariom--Portfolio/"},{id:2,name:"Python Projects",desc:'I created the "MY-PYTHON-PROJECTS" repository to showcase my Python development skills. This repository includes projects like a Student Database CSV Generator using Tkinter, a House Price Prediction model using machine learning, and a YouTube Video Downloader script. These projects highlight my ability to build practical tools and work with data, reflecting my dedication to continuous learning and coding.',tech:["python","Tensorflow","numpy","sklit-learn"," matplitlib"],img:A,carousel:[Be,Ke,Ye],source_link:"https://github.com/hari7261/MY-PYTHON-PROJECTS"},{id:3,name:"Connect 4 Game",desc:"This project showcases a classic Connect 4 game, developed using HTML, CSS, and JavaScript. The game features an interactive grid where players compete to connect four discs in a row. With a responsive design crafted through CSS and dynamic game logic implemented in JavaScript, this project highlights my skills in front-end development and game design.",tech:["HTML5","CSS3","JavaScript"],img:xe,carousel:[Fe,Me,qe],source_link:"https://github.com/hari7261/Connect-4-Game",live_link:"https://hari7261.github.io/Connect-4-Game/"},{id:4,name:"E-Commerce WebApp",desc:"Shopie is a clean and simple one-page shopping website designed for an intuitive user experience. Built using HTML, CSS, and JavaScript, this project highlights a minimalist design approach, featuring essential sections like product listings, shopping cart, and a checkout form. The site is fully responsive, ensuring a seamless browsing experience on any device.",tech:["HTML","CSS","JS"],img:Se,carousel:[Ge,Je,We],source_link:"https://github.com/hari7261/Shopie",live_link:"https://hari7261.github.io/Shopie/"},{id:5,name:"Github-Profile-Finder",desc:"GitHub Profile Finder is a web application built using Next.js that allows users to search for GitHub profiles easily. Simply enter a username, and the app fetches and displays detailed information about the user, including repositories, followers, and more. This project leverages the power of Next.js to deliver a fast and efficient user experience.",tech:["Next.js","JavaScript","GitHub API"],img:Te,carousel:[Oe,Ve,De],source_link:"https://github.com/hari7261/Github-Profile-Finder",live_link:"https://github-profile-finder-orpin-nine.vercel.app/"},{id:6,name:"Food Recipe",desc:"Foodie Recipes is a website for cooking enthusiasts. It is a Single Page App (SPA) that allows users to explore a variety of recipes, save their favorites, and get inspiration for their next meal",tech:["Bootstrao","HTML","CSS","Javascript"],img:ze,carousel:[A],source_link:"https://github.com/hari7261/Foodie-recipe.io",live_link:"https://hari7261.github.io/Foodie-recipe.io/"},{id:7,name:"Tic Tac Toe",desc:"Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",tech:["HTML5","CSS3","JavaScript"],img:$e,carousel:[Ae,Ee,Re],source_link:"https://github.com/hari7261/Tic-Toe-Game",live_link:"https://hari7261.github.io/Tic-Toe-Game/"},{id:8,name:"CodeVision",desc:"CodeVision is a web application designed for managing and securing personal information. The application offers features for tracking and organizing various types of personal data while ensuring privacy and security.",tech:["CSS","HTML","JavaScript"],img:Ie,carousel:[Ue,Qe,Xe],source_link:"https://github.com/hari7261/CodeVision",live_link:"https://hari7261.github.io/CodeVision/"},{id:9,name:"TechFutureEmpire",desc:"🌟 Key Features: Led by a dedicated Full Stack Developer, the site features major projects like a movie app, game, and calculator, with a focus on continuous learning and problem-solving through top coding platforms, ensuring cutting-edge technology and innovative solutions.",tech:["HTML5","CSS3","JavaScript"],img:Ce,carousel:[Ze,et,tt],source_link:"https://github.com/hari7261/TechFutureEmpire",live_link:"https://hari7261.github.io/TechFutureEmpire/"}],P=[{id:1,name:"Aditya panday",image:"https://hari7261.github.io/TechFutureEmpire/assets/img/team/aditya.png",text:"I really am comfortable with collaborating and coding with hari. His ingenious ideas give me a lot of ideas solving a problem multiple ways.",country:"India",linkedIn:"https://www.linkedin.com/"},{id:2,name:"Himanshu Kumar Vishwakarma",image:"https://hari7261.github.io/TechFutureEmpire/assets/img/team/himanshu.jpg",text:"Throughout our collaboration, I was consistently impressed by hari's professionalism, attention to detail, and ability to adapt to changing requirements.",country:"India",linkedIn:"https://www.linkedin.com/in/"},{id:3,name:"Devanand Upadhyay",image:"https://hari7261.github.io/TechFutureEmpire/assets/img/team/devanand.jpg",text:"He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.",country:"India",linkedIn:"https://www.linkedin.com/in/devanand-upadhyay/"},{id:4,name:"Ashwin Sundar",image:"https://hari7261.github.io/Hariom--Portfolio/assets/images/ashwin.png",text:"His kindness and patience with his peers makes him easy to work with no matter the difficulty, and that reflects as well when it comes to helping others in his team or explaining something when need be",country:"India",linkedIn:"https://www.linkedin.com/in/"},{id:5,name:"Anjali Kumari",image:"https://media.licdn.com/dms/image/v2/D4D35AQFni5-RsXu1UA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1702833414463?e=1724263200&v=beta&t=xhA33PpHyZlKhZ2gcxIgZ1xXIGzKyIjW_dTF_zuizEQ",text:"Communication was another strength that hari brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.",country:"India",linkedIn:"https://www.linkedin.com/in/anjali-kumari-099729267/"},{id:6,name:"Unknown",image:"https://icon2.cleanpng.com/20180626/ehy/aazadnugz.webp",text:"I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.",country:"Unknown",linkedIn:"https://www.google.com/search?q=who+is+Hariom+Kumar+Pandit&gs_ivs=1#tts=0"}],rt=[{id:1,icon:nt,title:"Responsive Design",text:"I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size."},{id:2,icon:it,title:"Front-end Development",text:"I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression."},{id:3,icon:at,title:"Back-end Development",text:"My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly."}],E=[{id:1,name:"About",url:"/#about"},{id:2,name:"Service",url:"/#service"},{id:3,name:"Work",url:"/#work"},{id:4,name:"Testimonial",url:"/#testimonial"},{id:5,name:"Contact",url:"/#contact"}],lt="_navbar_container_1vrnd_1",dt="_progress_bar_1vrnd_6",mt="_navbar_1vrnd_1",ht="_fixed_1vrnd_31",_t="_logo_btn_1vrnd_35",pt="_logo_1vrnd_35",gt="_navlink_1vrnd_45",ut="_active_1vrnd_54",vt="_font_1vrnd_59",ft="_resume_container_1vrnd_67",bt="_resume_1vrnd_67",yt="_resume_hover_1vrnd_78",wt="_theme_btn_1vrnd_110",kt="_theme_img_1vrnd_114",Nt="_mobilemenu_1vrnd_120",xt="_mobile_font_1vrnd_138",$t="_mobile_resume_container_1vrnd_144",St="_mobile_active_1vrnd_150",Tt="_hamburger_1vrnd_161",zt="_line_1vrnd_169",Ct="_open_1vrnd_197",d={navbar_container:lt,progress_bar:dt,navbar:mt,fixed:ht,logo_btn:_t,logo:pt,navlink:gt,active:ut,font:vt,resume_container:ft,resume:bt,resume_hover:yt,theme_btn:wt,theme_img:kt,mobilemenu:Nt,mobile_font:xt,mobile_resume_container:$t,mobile_active:St,hamburger:Tt,line:zt,open:Ct},jt=()=>{const{theme:t,toggleTheme:i}=V(),[c,l]=_.useState(""),[n,s]=_.useState(!1),[r,k]=_.useState(!1),N=()=>{k(!r)};return _.useEffect(()=>{const g=()=>{window.pageYOffset>780?s(!0):s(!1)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]),e("div",{className:d.navbar_container,children:a("nav",{className:`${d.navbar} ${n?"fixed":""}`,children:[e(o.button,{type:"button",onClick:()=>{window.scrollTo(0,0)},whileHover:{scale:1.12,backgroundColor:"var(--dark-blue)",transition:{type:"spring",damping:20,stiffness:300}},className:d.logo_btn,children:e("img",{src:_e,alt:"My logo",className:d.logo,loading:"lazy"})}),a("ul",{className:d.navlink,children:[E.map(g=>e("li",{className:c===g.name?`${d.active}`:null,children:e("a",{href:g.url,className:d.font,onClick:()=>l(g.name),children:g.name})},g.id)),e("li",{children:e("button",{type:"button",className:d.theme_btn,onClick:i,children:t==="light"?e("img",{src:M,className:d.theme_img,alt:"light theme",loading:"lazy"}):e("img",{src:q,className:d.theme_img,alt:"dark theme",loading:"lazy"})})})]}),a("div",{className:d.hamburger,onClick:N,onKeyDown:g=>{g.key==="Enter"&&N()},role:"button",tabIndex:0,children:[e("span",{className:`${d.line} ${r?d.open:""}`}),e("span",{className:`${d.line} ${r?d.open:""}`}),e("span",{className:`${d.line} ${r?d.open:""}`})]}),a("ul",{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${d.mobilemenu} ${r?"h-screen opacity-100":"h-0"}`,children:[e("li",{children:e("button",{type:"button",className:`${d.theme_btn} mt-[130px]`,onClick:i,children:t==="light"?e("img",{src:M,className:d.theme_img,alt:"light theme",loading:"lazy"}):e("img",{src:q,className:d.theme_img,alt:"dark theme",loading:"lazy"})})}),E.map((g,C)=>e("li",{className:c===g.name?d.active:null,children:e(o.a,{href:g.url,className:d.mobile_font,variants:p("right","",C*.2,1),initial:"hidden",whileInView:"show",onClick:()=>{l(g.name),N()},children:g.name})},g.id))]})]})})},It="_container_1nbcg_1",Pt="_intro_1nbcg_14",Ht="_name_1nbcg_25",Lt="_desc_1nbcg_31",Ft="_btn_container_1nbcg_40",Mt="_btn_hover_1nbcg_51",qt="_btn_1nbcg_40",At="_arrow_1nbcg_65",w={container:It,intro:Pt,name:Ht,desc:Lt,btn_container:Ft,btn_hover:Mt,btn:qt,arrow:At},Et=()=>e(o.section,{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:a("div",{className:w.container,children:[a("p",{className:w.intro,children:["Hi, I'm"," ",e(o.span,{variants:p("","",.1,1),className:w.name,children:"Hariom Kumar Pandit"})]}),a("p",{className:w.intro,children:["Also known as"," ",e(o.span,{variants:p("","",.3,1),className:w.name,children:"Hari"})]}),e(o.p,{variants:p("","",.5,1),className:w.desc,children:"I am a Software Devloper..."}),a(o.button,{variants:p("","",.6,1),className:w.btn_container,onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:[e("span",{className:w.btn_hover,children:"Check out my work"}),e("span",{className:w.btn,children:"Check out my work"}),e(U,{className:w.arrow})]})]})}),z=(t,i,c)=>function(){const n=ne.useMediaQuery({minWidth:768});return a(o.section,{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!n,amount:.25},className:`max-w-[90%] mx-auto ${c}`,children:[e("span",{id:i,children:" "}),e(t,{})]})},Rt="_title_1dw4f_1",Ot="_para_1dw4f_23",Vt="_text_1dw4f_29",Dt="_link_1dw4f_37",Gt="_img_container_1dw4f_59",Jt="_img_1dw4f_59",Wt="_pulse_1dw4f_1",x={title:Rt,para:Ot,text:Vt,link:Dt,img_container:Gt,img:Jt,pulse:Wt},Bt=()=>a(H,{children:[e(o.h1,{variants:S(),className:x.title,children:"About Me"}),a("div",{className:x.para,children:[a(o.p,{variants:p("","",.5,1),className:x.text,children:["Hey there! I'm"," ",e("a",{href:"https://in.linkedin.com/in/hariom-kumar-pandit-2k3",target:"_blank",className:x.link,rel:"noreferrer",children:"Hariom Kumar (Hari),"})," ","a passionate software devloper specializing in React and python framworks. I thrive on delivering state-of-the-art software solutions. When I'm not coding, you'll find me exploring the fascinating worlds of Tech, Movies, and Music."]}),a(o.p,{variants:p("","",1,1),className:x.text,children:["My journey into software development was anything but ordinary. As a former third-year student at Excel engineering college, I made a big decision to focus on extra curricular activities like coding and learing new tech stacks. That led me to Microverse, where I honed my skills through pair programming and real-world projects. I completed most of the projects in my acadimic itself alone, amassing over"," ",a("a",{href:"https://github.com/hari7261",target:"_blank",className:x.link,rel:"noreferrer",children:[" ",'2+ contributions on GitHub"as begginer".']})," ","in just one year. My experience in the Students' Union further sharpened my problem-solving and communication abilities."]}),a(o.p,{variants:p("","",1.25,1),className:x.text,children:["Ready to bring your project to life? Reach out—I'm excited to collaborate!"," ",e("a",{href:"https://drive.google.com/file/d/1tlBiXU9CAqDBXoHL7S8Bq8YFsehES3m5/view?usp=sharing",target:"_blank",className:x.link,rel:"noreferrer",children:"Check out my resume"})," ","for more insights into my journey and qualifications."]})]})]}),Kt=z(Bt,"about",""),Yt="_title_y2zs0_1",Ut="_subtitle_y2zs0_24",Qt="_card_container_y2zs0_31",Xt="_tilt_y2zs0_42",Zt="_card_shadow_y2zs0_46",en="_card_overlay_y2zs0_50",tn="_card_y2zs0_31",nn="_img_container_y2zs0_81",an="_img_y2zs0_81",sn="_name_y2zs0_95",on="_text_y2zs0_102",cn="_container_y2zs0_209",y={title:Yt,subtitle:Ut,card_container:Qt,tilt:Xt,card_shadow:Zt,card_overlay:en,card:tn,img_container:nn,img:an,name:sn,text:on,container:cn},rn=()=>a("div",{className:y.container,children:[e(o.h1,{variants:S(),className:y.title,children:"My Services"}),e(o.p,{variants:p("","",.15,1),className:y.subtitle,children:"What I can do for you -"}),e("div",{className:y.card_container,children:rt.map((t,i)=>e(W,{className:y.tilt,children:a(o.div,{variants:p("right","tween",i*.8,.5),className:y.card_shadow,children:[e("div",{className:y.card_overlay,children:e("p",{className:y.text,children:t.text})}),a("div",{className:y.card,children:[e("div",{className:y.img_container,children:e("img",{className:`${y.img} ${i===2?"w-28 h-28 lg:w-24 lg:h-24 lg:mb-4 xl:w-[5.5rem] xl:h-[5.5rem] xl:mb-4 xl:mt-4":""}`,src:t.icon,alt:t.title,loading:"lazy"})}),e("p",{className:y.name,children:t.title})]})]})},t.id))})]}),ln=z(rn,"service","my-0"),dn="_title_f344t_1",mn="_btn_container_f344t_10",hn="_btn_active_f344t_26",_n="_tech_container_f344t_32",pn="_tech_f344t_32",gn="_tech_img_f344t_50",$={title:dn,btn_container:mn,btn_active:hn,tech_container:_n,tech:pn,tech_img:gn},un=()=>{const[t,i]=_.useState("all"),c=n=>{i(n)},l=["all","languages","frameworks","tools"];return a(H,{children:[e(o.p,{variants:p("","",.5,1),className:$.title,children:"Here are a few technologies I`ve been working with recently:"}),e(o.div,{variants:S(),className:$.btn_container,children:l.map(n=>e("button",{type:"button",className:n===t?$.btn_active:$.btn,onClick:()=>c(n),children:n},n.name))}),e("div",{className:$.tech_container,children:ot.filter(n=>n.stack.includes(t)).map((n,s)=>e(o.abbr,{initial:"hidden",whileInView:"show",variants:p("up","",s*.15,.5),title:n.name,className:$.tech,children:e("img",{className:$.tech_img,src:n.icon,alt:n.name,loading:"lazy"})},n.name))})]})},vn=z(un,"",""),fn="_title_20yrz_1",bn="_project_container_20yrz_23",yn="_card_20yrz_30",wn="_img_20yrz_36",kn="_card_overlay_20yrz_46",Nn="_card_text_20yrz_63",xn="_text_20yrz_74",$n="_name_20yrz_96",Sn="_tech_20yrz_103",Tn="_tech_list_20yrz_108",zn="_btn_container_20yrz_154",Cn="_btn_hover_20yrz_167",jn="_btn_20yrz_154",b={title:fn,project_container:bn,card:yn,img:wn,card_overlay:kn,card_text:Nn,text:xn,"slide-down":"_slide-down_20yrz_1",name:$n,tech:Sn,tech_list:Tn,btn_container:zn,btn_hover:Cn,btn:jn,"slide-up":"_slide-up_20yrz_1"},In="_overlay_jnmq5_1",Pn="_container_jnmq5_12",Hn="_close_btn_jnmq5_19",Ln="_img_jnmq5_36",Fn="_content_jnmq5_42",Mn="_name_jnmq5_48",qn="_tech_jnmq5_53",An="_tech_list_jnmq5_58",En="_description_jnmq5_104",Rn="_link_jnmq5_109",On="_btn_container_jnmq5_115",Vn="_btn_hover_jnmq5_127",Dn="_btn_jnmq5_115",u={overlay:In,container:Pn,close_btn:Hn,img:Ln,content:Fn,name:Mn,tech:qn,tech_list:An,description:En,link:Rn,btn_container:On,btn_hover:Vn,btn:Dn};const D=({carousel:t})=>e(ie,{...{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1},children:t.map(c=>e("div",{className:"carousel-img",children:e("img",{src:c,alt:"project sample img",loading:"lazy"})},c))});D.propTypes={carousel:T.arrayOf(T.string).isRequired};const G=({handleClose:t,project:i})=>e(o.div,{className:u.overlay,initial:"hidden",animate:"show",exit:{opacity:0,scale:0,transition:{type:"tween",duration:.5}},variants:he(0,.5),children:a("div",{className:u.container,children:[e(Q,{className:u.close_btn,onClick:t}),e(D,{carousel:i.carousel}),a("div",{className:u.content,children:[e("h2",{className:u.name,children:i.name}),e("p",{className:u.tech,children:i.tech.map(c=>e("span",{className:u.tech_list,children:`#${c}`},c))}),e("p",{className:u.description,children:i.desc}),a("div",{className:u.link,children:[a("a",{href:i.source_link,target:"_blank",className:`${u.source_link} ${u.btn_container}`,rel:"noreferrer",children:[e("span",{className:u.btn_hover,children:"View Source"}),e("span",{className:u.btn,children:"View Source"})]}),i.id!==2&&i.id!==5?a("a",{href:i.live_link,target:"_blank",className:`${u.live_link} ${u.btn_container}`,rel:"noreferrer",children:[e("span",{className:u.btn_hover,children:"View Live"}),e("span",{className:u.btn,children:"View Live"})]}):null]})]})]})});G.propTypes={handleClose:T.func.isRequired,project:T.objectOf(T.string).isRequired};const Gn=()=>{const[t,i]=_.useState(!1),[c,l]=_.useState(null),n=r=>{l(r),i(!0)},s=()=>{l(null),i(!1)};return a("div",{className:"relative",children:[e(o.h1,{variants:S(),className:b.title,children:"My Recent Works"}),e("div",{className:b.project_container,children:ct.map((r,k)=>a(o.div,{variants:p("up","",k*.4,.5),index:k,className:b.card,children:[e("img",{className:b.img,src:r.img,alt:"project sample",loading:"lazy"}),e("div",{className:b.card_overlay,children:a("div",{className:b.card_text,children:[a("div",{className:b.text,children:[e("h2",{className:b.name,children:r.name}),e("p",{className:b.tech,children:r.tech.map(N=>e("span",{className:b.tech_list,children:`#${N}`},N))})]}),a("button",{type:"button",className:b.btn_container,onClick:()=>n(r),children:[e("span",{className:b.btn_hover,children:"Learn more"}),e("span",{className:b.btn,children:"Learn more"})]})]})})]},r.id))}),e(Y,{children:t&&e(G,{handleClose:s,project:c})})]})},Jn=z(Gn,"work","my-8"),Wn="_title_f6vlo_1",Bn="_subtitle_f6vlo_24",Kn="_carousel_container_f6vlo_31",Yn="_btn_container_f6vlo_35",Un="_button_f6vlo_41",Qn="_prev_f6vlo_47",Xn="_next_f6vlo_60",Zn="_card_container_f6vlo_73",ei="_card_f6vlo_73",ti="_header_f6vlo_89",ni="_img_f6vlo_96",ii="_openquote_f6vlo_104",ai="_para_f6vlo_110",si="_label_f6vlo_117",oi="_name_f6vlo_124",ci="_country_f6vlo_130",ri="_icon_f6vlo_136",h={title:Wn,subtitle:Bn,carousel_container:Kn,btn_container:Yn,button:Un,prev:Qn,next:Xn,card_container:Zn,card:ei,header:ti,img:ni,openquote:ii,para:ai,label:si,name:oi,country:ci,icon:ri},li=()=>{const[t,i]=_.useState(1),[c,l]=_.useState(1),[n,s]=_.useState(!1),r=t*c,k=r-c,N=P.slice(k,r),g=()=>{i(n?m=>m===2?m-1:1:m=>m===1?P.length:m-1)},C=()=>{i(n?m=>m===1?m+1:2:m=>m===P.length?1:m+1)};return _.useEffect(()=>{const m=window.matchMedia("(min-width: 1200px)"),I=J=>{J.matches?(l(3),s(!0)):(l(1),s(!1))};return I(m),m.addEventListener("change",I),()=>{m.removeEventListener("change",I)}},[]),a("div",{className:h.container,children:[e(o.h1,{variants:S(),className:h.title,children:"Testimonials"}),e(o.p,{variants:p("","",.15,1),className:h.subtitle,children:"What my coding partners say about me -"}),a("div",{className:h.carousel_container,children:[e(o.div,{variants:p("","",.5,1),className:h.card_container,children:N.map(m=>a(o.div,{initial:"hidden",animate:"show",variants:p("","",.15,1),className:h.card,children:[a("div",{className:h.header,children:[e(o.div,{variants:S(),children:e(X,{className:h.openquote})}),e("img",{className:h.img,src:m.image,alt:"profile"})]}),e(o.p,{variants:p("","",.15,1),className:h.para,children:m.text}),a("div",{className:`${h.label} ${h.firstlabel}`,children:[a(o.p,{variants:j("left","",.3,.75),className:h.name,children:[m.name," ",a("span",{className:h.country,children:["(",m.country,")"]})]}),e(o.abbr,{variants:j("right","",.3,.75),title:"LinkedIn Profile",children:e("a",{href:m.linkedIn,target:"_blank",className:h.icon,rel:"noreferrer","aria-label":"LinkedIn Profile",children:e(Z,{})})})]})]},m.id))}),a("div",{className:h.btn_container,children:[e("button",{className:n&&t===1?"hidden":`${h.button} ${h.prev}`,type:"button",onClick:g,children:e(ee,{})}),e("button",{className:n&&t===2?"hidden":`${h.button} ${h.next}`,type:"button",onClick:C,children:e(te,{})})]})]})]})},di=z(li,"testimonial","my-0"),mi="/assets/contact-e9a8509a.svg",hi="_title_vfnir_1",_i="_subtitle_vfnir_23",pi="_container_vfnir_30",gi="_form_container_vfnir_40",ui="_form_vfnir_40",vi="_form_title_vfnir_58",fi="_input_vfnir_65",bi="_textarea_vfnir_82",yi="_btn_container_vfnir_86",wi="_btn_hover_vfnir_100",ki="_btn_vfnir_86",Ni="_error_vfnir_133",xi="_img_container_vfnir_137",$i="_img_vfnir_137",f={title:hi,subtitle:_i,container:pi,form_container:gi,form:ui,form_title:vi,input:fi,textarea:bi,btn_container:yi,btn_hover:wi,btn:ki,error:Ni,img_container:xi,img:$i},Si=()=>{const[t,i]=_.useState({name:"",email:"",message:""}),c=n=>{const{target:s}=n,{name:r,value:k}=s;i({...t,[r]:k})},l=n=>{n.preventDefault();const s=n.target;s.checkValidity()&&(s.submit(),i({name:"",email:"",message:""}))};return a(H,{children:[e(o.h1,{variants:S(),className:f.title,children:"Get in Touch!"}),e(o.p,{variants:p("","",.15,1),className:f.subtitle,children:"I'm always excited to hear about new opportunities and collaborations. Don't hesitate to reach out and let's make something great."}),a("div",{className:f.container,children:[e(o.form,{variants:j("left","",0,1),onSubmit:l,action:"https://formspree.io/f/xldrdowa",method:"post",className:f.form_container,children:a("div",{className:f.form,children:[e("h4",{className:f.form_title,children:"Contact Me "}),e("input",{type:"text",placeholder:"Name",required:!0,maxLength:"30",name:"name",value:t.name,onChange:c,className:f.input}),e("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:t.email,onChange:c,className:f.input}),e("textarea",{cols:"30",rows:"10",placeholder:"Your message",required:!0,maxLength:"500",name:"message",value:t.message,onChange:c,className:`${f.input} ${f.textarea}`}),a("button",{type:"submit",className:f.btn_container,children:[e("span",{className:f.btn_hover,children:"Get in touch"}),e("span",{className:f.btn,children:"Get in touch"})]})]})}),e(o.div,{variants:j("right","",0,1),className:f.img_container,children:e("img",{src:mi,alt:"contact",className:f.img,loading:"lazy"})})]})]})},Ti=z(Si,"contact","my-0"),zi="_footer_lnz0v_1",Ci="_up_icon_container_lnz0v_11",ji="_floating_lnz0v_1",Ii="_title_lnz0v_26",Pi="_text_lnz0v_31",Hi="_icon_container_lnz0v_53",Li="_overlay_lnz0v_60",Fi="_up_overlay_lnz0v_65",Mi="_icon_lnz0v_53",qi="_icon_hover_lnz0v_80",Ai="_up_icon_lnz0v_11",Ei="_up_icon_hover_lnz0v_88",Ri="_p_lnz0v_122",Oi="_a_lnz0v_129",Vi="_span_lnz0v_173",v={footer:zi,up_icon_container:Ci,floating:ji,title:Ii,text:Pi,icon_container:Hi,overlay:Li,up_overlay:Fi,icon:Mi,icon_hover:qi,up_icon:Ai,up_icon_hover:Ei,p:Ri,a:Oi,span:Vi},Di=()=>a(o.section,{id:v.footer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:[e(o.div,{variants:p("","",1,1),className:v.up_icon_container,children:e("abbr",{title:"back to home page",children:a("button",{type:"button",className:`${v.overlay} ${v.up_overlay}`,onClick:()=>{window.scrollTo(0,0)},children:[e(F,{className:`${v.icon_hover} ${v.up_icon_hover}`}),e(F,{className:`${v.icon} ${v.up_icon}`})]})})}),e("p",{className:v.title,children:e("span",{className:v.text,children:"My Social Networks"})}),e("div",{className:v.icon_container,children:st.map(t=>a("a",{href:t.url,target:"_blank",className:v.overlay,rel:"noreferrer",children:[e("img",{className:v.icon_hover,src:t.icon,alt:t.name,loading:"lazy"}),e("img",{className:v.icon,src:t.icon1,alt:t.name,loading:"lazy"})]},t.id))}),e("abbr",{title:"Source Code",className:v.p,children:a("a",{href:"https://hari7261.github.io/Hariom--Portfolio/",target:"_blank",className:v.a,rel:"noreferrer",children:["Brought into being by"," ",e("span",{className:v.span,children:"©"})," ","Hariom Kumar Pandit"]})})]}),Gi=()=>{const{progress:t}=ae();return a(se,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),a("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},Ji=t=>{const i=_.useRef(),[c]=_.useState(()=>me(new Float32Array(5200),{radius:1.2})),{theme:l}=V(),n=l==="dark"?"#ffffff":"#000000";return re((s,r)=>{i.current.rotation.x-=r/10,i.current.rotation.y-=r/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(le,{ref:i,positions:c,stride:3,frustumCulled:!0,...t,children:e(de,{transparent:!0,color:n,size:.002,sizeAttenuation:!0,depthWrite:!1})})})},Wi=()=>{const[t,i]=_.useState(1);return _.useEffect(()=>{const c=()=>{i(window.innerWidth/window.innerHeight)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),e("div",{className:"absolute left-0 top-0 z-[-1]",children:a(oe,{camera:{position:[0,0,1]},gl:{antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"},style:{width:"100vw",height:"100vh"},pixelratio:window.devicePixelRatio,aspectratio:t,className:"star-canvas",children:[e(_.Suspense,{fallback:e(Gi,{}),children:e(Ji,{})}),e(ce,{all:!0})]})})};function Bi(){return a(O,{children:[a("div",{className:"relative w-screen h-screen z-10",children:[e(Et,{}),e(Wi,{})]}),a("div",{className:"relative z-0 body",children:[e(jt,{}),e(Kt,{}),e(vn,{}),e(ln,{}),e(Jn,{}),e("div",{className:"relative mt-24 pb-28",children:e(di,{})}),e("div",{className:"contact mb-80",children:e(Ti,{})})]}),e(Di,{})]})}K.createRoot(document.getElementById("root")).render(e(B.StrictMode,{children:e(Bi,{})}));
