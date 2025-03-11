import Navigation from "../components/navigation";
import Button from "../components/button";
import { useState } from "react";
import PageAnimation from "../components/pageAnimation";

const mobileInfo = {
  title: "Mobile Development",
  paragraph1: "Here at CODEi, We leverage modern technologies to craft innovative and user-friendly apps. With expertise in Android development, CODEi utilizes the lates tools and frameworks to create robust, scalable, and secure mobile solutions. Some of the modern technologies and approaches we employ include:",
  paragraph2: "Cross-platform development with frameworks like React, AI and machine learning integrations for enhanced app functionality, Agile development methodologies for efficient project management, Continous Integration and deployment (CI/CD) pipelines for seamless testing and delivery. CODEI harnesses these technologies to deliver high-quality mobile apps that meet the evolving needs of businesses and users alike, providing a competitve edge in the digital landscape."
}, webInfo = {
  title: "Web Development",
  paragraph1: "Our Development process begins from the discovery and thorough research of client goals, target audience, and project requirements. Followed by creating wireframes, prototypes and visual designs using tools like Figma, Adobe XD, and Sketch. Then we commence building responsive, interactive interfaces using HTML5, CSS3, JavaScript, and frameworks like React.",
  paragraph2: "With that done, we begin developing the server-side logic, databases, and APIs using languages like Node.js, Python and frameworks like Django, or Express. Then we begin testing to ensure bug-free and smooth functionality, After which we launch the website on cloud platforms. Modern Technologies used by CODEi include: React, Figma, Adobe Illustrator, Django, Python, MongDB, MySQL, Git and GitHub, Pytest, Unittest, and more."
}, graphicInfo = {
  title: "Branding",
  paragraph1: "At CODEi, we have a team of skilled designers who ensure that all measures are taken to craft creative and out-of-the-box designs from conceptualization to finalization, ensuring that we understand client goals, our target audience, and deliver refined designs based on feedbacks gotten from usability tests.",
  paragraph2: "Modern Technologies used by CODEi in Graphic Design include: Design Softwares like Photoshop, Illustrator. UI/UX Design tools like Figma, Adeobe XD. Color Management tools like Adobe Color, Color Hunt. Typography and font design softwares like FontLab, Glyphs. Collaboration tools like Figma, Slack. Creating Design Systems using tools like Storybook and Bit."
}, optimizationInfo = {
  title: "Optimization",
  paragraph1: "Some optimization details",
  paragraph2: "Some optimization details"
}

const Services =()=> {
  const [bg, setBg] = useState("linear-gradient(45deg, rgb(227 225 226), rgb(223 223 223))");
  const [state1, setState1] = useState("activeLarge");
  const [state2, setState2] = useState("inactiveSmall");
  const [state3, setState3] = useState("inactiveSmall");
  const [state4, setState4] = useState("inactiveLarge");
  const [display, setDisplay] = useState("onn");
  const [clicked, setClicked] = useState("A");

  const ServiceInfo =({a, b, c})=>{
    return (
      <section className="right">
        <div style={{background: bg}} className={`${b} information blurIn ${c}`}>
          <h1>{a.title}</h1>
          <p>{a.paragraph1}</p>
          <p>{a.paragraph2}</p>
          <div className="buttons">
            <Button linkSrc="/work" imgSrc="../media/logo-icons/laptop2.svg" claz="work">View our Work</Button>
            <Button linkSrc="/contact" imgSrc="../media/logo-icons/telephone.svg" claz="contct">Contact Us</Button>
          </div>
        </div>
      </section>
    )
  }

  const CallServiceInfo =()=> {
    if (clicked === "A") {return <ServiceInfo a={webInfo} b={display} c="banner1"/>
    } else if (clicked === "B") {return <ServiceInfo a={graphicInfo} b={display} c="banner2"/>
    } else if (clicked === "C") {return <ServiceInfo a={mobileInfo} b={display} c="banner3"/>
    } else if (clicked === "D") {return <ServiceInfo a={optimizationInfo} b={display} c="banner4"/>
    }
  }

  const handleState=(a, b, c, d)=>{
    if (a|| b || c || d === "activeSmall" || "activeLarge"){
      setState1("inactiveLarge");
      setState2("inactiveSmall");
      setState3("inactiveSmall");
      setState4("inactiveLarge");
    }
  }

  const handleClick =(a, b)=>{
    setClicked(a);
    setDisplay(b);
  }

  return (
    <PageAnimation pageIcon="./media/logo-icons/services.svg" page="Exiting Services Page">
      <section id="servicesPage" className="ServicesPage">
        <Navigation/>
        <div className="categories grid">
          <section>
            <article className={`${state1} border web blurIn`} onMouseEnter={()=>{handleState(state1, state2, state3, state4); setState1("activeLarge");}} onClick={()=>{handleClick("A", "onn"); setBg("linear-gradient(45deg, rgb(227 225 226), rgb(223 223 223))")}}><h3>Web Development</h3></article>
            <article className={`${state2} border branding blurIn`} onMouseEnter={()=>{handleState(state1, state2, state3, state4); setState2("activeSmall");}} onClick={()=>{handleClick("B", "onn"); setBg("linear-gradient(45deg, #efefef, #d3bbac)")}}><h3>Branding</h3></article>
          </section>
          <section>
            <article className={`${state3} border mobile blurIn`} onMouseEnter={()=>{handleState(state1, state2, state3, state4); setState3("activeSmall");}} onClick={()=> {handleClick("C", "onn"); setBg("linear-gradient(45deg, #ebeff5, #a7b8d3)")}}><h3>Mobile Development</h3></article>
            <article className={`${state4} border opt blurIn`} onMouseEnter={()=>{handleState(state1, state2, state3, state4); setState4("activeLarge");}} onClick={()=> {handleClick("D", "onn"); setBg("linear-gradient(45deg, #8e7dc7, #664cef)")}}><h3>Code Optimization</h3></article>
          </section>
        </div>
        <CallServiceInfo/>
      </section>
    </PageAnimation>
  )
}
export default Services