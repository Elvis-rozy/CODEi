import ceo1 from "../media/backgrounds/profiles/ceo1b.jpg";
import ceo2 from "../media/backgrounds/profiles/ceo2b.jpg";
import ceo3 from "../media/backgrounds/profiles/ceo3b.jpg";
import ceo4 from "../media/backgrounds/profiles/ceo4b.jpg";
import Navigation from "../components/navigation";
import TextCard from "../components/textCard";
import TxtCard from "../components/txtCard";
import { useState } from "react";
import PageAnimation from "../components/pageAnimation";

const ceo1Obj = {
  serialNo : "01",
  firstName : "Elvis",
  lastName : "Oguoma",
  bio : "Lead Frontend Developer | Highly skilled in crafting responsive, user-centric interfaces with HTML, CSS, SCSS, JavaScript, and React. Passionate about delivering seamless user experienes. When not coding, I'm probably drawing, or developing new designs.",
  degreeA : "Certificate of Completion: Software Engineering with a Specialization in Front-end - ALX Software Engineering Programme",
  degreeB : "ghshgdfgd fghdfgdfgdfgdfg",
  experience : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  backgroundImage : ceo1,
  contactLinks : [
    {name : "twitter", link: "", linkIcon : "./media/logo-icons/twitter-x.svg"},
    {name : "github", link: "", linkIcon : "./media/logo-icons/github.svg"},
    {name : "linkedIn", link: "", linkIcon : "./media/logo-icons/linkedin.svg"}
  ]
}, ceo2Obj = {
  serialNo : "02",
  firstName : "Jesse",
  lastName : "Oguoma",
  bio : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  degreeA : "ghshgdfgd fghdfgdfgdfgdfg",
  degreeB : "ghshgdfgd fghdfgdfgdfgdfg",
  experience : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  backgroundImage : ceo2,
  contactLinks : [
    {name : "twitter", link: "", linkIcon : "./media/logo-icons/twitter-x.svg"},
    {name : "github", link: "", linkIcon : "./media/logo-icons/github.svg"},
    {name : "linkedIn", link: "", linkIcon : "./media/logo-icons/linkedin.svg"}
  ]
}, ceo3Obj = {
  serialNo : "03",
  firstName : "Jumoke",
  lastName : "Oguoma",
  bio : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  degreeA : "ghshgdfgd fghdfgdfgdfgdfg",
  degreeB : "ghshgdfgd fghdfgdfgdfgdfg",
  experience : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  backgroundImage : ceo3,
  contactLinks : [
    {name : "twitter", link: "", linkIcon : "./media/logo-icons/twitter-x.svg"},
    {name : "github", link: "", linkIcon : "./media/logo-icons/github.svg"},
    {name : "linkedIn", link: "", linkIcon : "./media/logo-icons/linkedin.svg"}
  ]
}, ceo4Obj = {
  serialNo : "04",
  firstName : "Joy",
  lastName : "Oguoma",
  bio : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  degreeA : "ghshgdfgd fghdfgdfgdfgdfg",
  degreeB : "ghshgdfgd fghdfgdfgdfgdfg",
  experience : "lorem lorem lorrem relm fsdvghdfghjkhdfklghkl sdfhjklhgjkfsdgdfhg bdfghshgdfgd fghdfgdfgdfgdfg",
  backgroundImage : ceo4,
  contactLinks : [
    {name : "twitter", link: "", linkIcon : "./media/logo-icons/twitter-x.svg"},
    {name : "github", link: "", linkIcon : "./media/logo-icons/github.svg"},
    {name : "linkedIn", link: "", linkIcon : "./media/logo-icons/linkedin.svg"}
  ]
}

const stkPic = [
  {class: "a", picName: "html", picLink: "./media/logo-icons/html.png"},
  {class: "b", picName: "css", picLink: "./media/logo-icons/css.png"},
  {class: "c", picName: "javaScript", picLink: "./media/logo-icons/js.png"},
  {class: "d", picName: "agile", picLink: "./media/logo-icons/agile.png"},
  {class: "e", picName: "API", picLink: "./media/logo-icons/api.jpeg"},
  {class: "f", picName: "figma", picLink: "./media/logo-icons/figma.png"},
  {class: "g", picName: "Git", picLink: "./media/logo-icons/git.jpeg"},
  {class: "h", picName: "database", picLink: "./media/logo-icons/db.jpeg"},
  {class: "i", picName: "mongoDB", picLink: "./media/logo-icons/mongodb.png"},
  {class: "j", picName: "mySQL", picLink: "./media/logo-icons/mysql.png"},
  {class: "k", picName: "python", picLink: "./media/logo-icons/python.png"},
  {class: "l", picName: "aws", picLink: "./media/logo-icons/aws.svg"},
  {class: "m", picName: "django", picLink: "./media/logo-icons/django.svg"},
  {class: "n", picName: "django", picLink: "./media/logo-icons/react.png"},
  {class: "o", picName: "django", picLink: "./media/logo-icons/github2.svg"}
];

const Ceo =({a, b, c})=>{
  return (
    <section className={`Ceo ${b} ${c}`} style={{background: `url(${a.backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <h1 className="serialNumber">{a.serialNo}</h1>
      <h1 className="firstName">{a.firstName}</h1>
      <h1 className="lastName">{a.lastName}</h1>
      <p className="bio">{a.bio}</p>
      <ul className="education">
        <li>{a.degreeA}</li>
        <li>{a.degreeB}</li>
      </ul>
      <div className="experience">
        <h4>Recent Projects</h4>
        <ul className="projects">
          <li>{a.degreeA}</li>
          <li>{a.degreeB}</li>
        </ul>
      </div>
      <span className="contactLinks">{a.contactLinks.map((item)=>(<a key={item.name} href={item.link}><img className={item.class} src={item.linkIcon} alt={item.name}/></a>))}</span>
    </section>
  )
}

const About =()=> {

  const [clicked, setClicked] = useState("A");
  const [ceo1, setCeo1] = useState("unveiled");
  const [ceo2, setCeo2] = useState("veiled");
  const [ceo3, setCeo3] = useState("veiled");
  const [ceo4, setCeo4] = useState("veiled");
  const [display, setDisplay] = useState("off");

  const handleVeil=(a, b, c, d)=>{
    if (a|| b || c || d === "unveiled"){
      setCeo1("veiled");
      setCeo2("veiled");
      setCeo3("veiled");
      setCeo4("veiled");
    }
  }

  const handleState =(a, b)=>{
    setClicked(a);
    setDisplay(b);
  }

  const CallCeo =()=> {
    if (clicked === "A") {return <Ceo a={ceo1Obj} b={display} c="banner1"/>
    } else if (clicked === "B") {return <Ceo a={ceo2Obj} b={display} c="banner2"/>
    } else if (clicked === "C") {return <Ceo a={ceo3Obj} b={display} c="banner3"/>
    } else if (clicked === "D") {return <Ceo a={ceo4Obj} b={display} c="banner4"/>
    }
  }

  return (
    <PageAnimation pageIcon="./media/logo-icons/about.svg" page="Exiting About Page">
      <section id="aboutPage" className="AboutPage">
        <Navigation/>
        <div className="vision widthIn">
          <TxtCard claz="topCard" title="Our Vision" paragraph="Empowering businesses to thrive in the digital landscape through innovative, user-centric, and high-performance web solutions, fostering unparalleled online experiences that drive growth, engagement, and success."/>
          <TxtCard claz="btmCard" title="Unique Selling Proposition" paragraph="Expert web development and optimization services, leveraging the latest technologies and best practices to drive business growth."/>
          <CallCeo/>
        </div>
        <section className="devTeam">
          <h4 className="teamHd blurIn">Meet the Team</h4>
          <article className="team">
            <TextCard hover={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo1("unveiled");}} click={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo1("unveiled"); handleState("A", "on");}} claz={ceo1} title="Name" paragraph="small text skldhvk jhlksvnm vdslk snvlk sndvkkl skldhvk jhlksvnm vdslk snvlk skldhvk jhlksvnm vdslk snvlk"/>
            <TextCard hover={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo2("unveiled");}} click={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo2("unveiled"); handleState("B", "on");}}  claz={ceo2} title="Name" paragraph="small text"/>
            <TextCard hover={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo3("unveiled");}} click={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo3("unveiled"); handleState("C", "on");}} claz={ceo3} title="Name" paragraph="small text"/>
            <TextCard hover={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo4("unveiled");}} click={()=>{handleVeil(ceo1, ceo2, ceo3, ceo4); setCeo4("unveiled"); handleState("D", "on");}} claz={ceo4} title="Name" paragraph="small text"/>
          </article>
          <span className="combinedStack blurIn">{stkPic.map((item)=>(<img key={item.class} className={item.class} src={item.picLink} alt={item.picName}/>))}</span>
        </section>
      </section>
    </PageAnimation>
  )
}
export default About