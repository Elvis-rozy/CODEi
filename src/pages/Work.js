import Navigation from "../components/navigation";
import TextCard from "../components/textCard";
import PageAnimation from "../components/pageAnimation";
import { useState } from "react";
/* eslint-disable no-unused-vars */

let obj ={};
const Work =()=> {
  const [projects, setProjects] = useState([
    {id: "01", state: "unveiled", num: 1, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/3iftee.jpg"},
    {id: "02", state: "", num: 2, name: "bigBite", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/bigbite.jpg"},
    {id: "03", state: "", num: 3, name: "Decor", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/decor.jpg"},
    {id: "04", state: "", num: 4, name: "FoodLENS", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/foodlens.jpg"},
    {id: "05", state: "", num: 5, name: "Candela", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/candela.jpg"},
    {id: "06", state: "", num: 6, name: "Kiqx", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/kiqx.jpg"},
    {id: "07", state: "", num: 7, name: "PixelMind", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/pixelmind.png"},
    {id: "08", state: "", num: 8, name: "Tuneflix", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/tuneflix.jpg"},
    {id: "09", state: "", num: 9, name: "Walls", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/walls.png"},
    {id: "10", state: "", num: 10, name: "Audivo", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/audivo.jpg"},
    {id: "11", state: "", num: 11, name: "Vvyd", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/vvyd.jpg"},
  ]);

  const [activeItemId, setActiveItemId] = useState('unveiled'), [bi, setBi] = useState('veiled');
  const handleMouseOver = (itemId) => {
    setActiveItemId(itemId);
    setBi('veiled');
  }

  const ProjectDetails =({project})=>{
    return (
      <>
        <span className="a blurIn">
          <h1>{project.id}</h1>
          <p className="desc1">{project.desc1}</p>
          <p className="desc2">{project.desc1}</p>
          <h5>Collaborators</h5>
          <div className="collaborators">
            <img src="../media/images/profiles/ceo1.jpg" alt=""/>
            <img src="../media/images/profiles/ceo2.jpg" alt=""/>
            <img src="../media/images/profiles/ceo3.jpg" alt=""/>
            <img src="../media/images/profiles/ceo4.jpg" alt=""/>
          </div>
        </span>
        <span className="b blurIn">
          <img src={project.previewImg} alt=""/>
          <div className="box">
            <span></span>
            <div className="row2">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <span></span>
            <span></span>
            <div className="row5">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <div className="row6">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
          </div>
        </span>
      </>
    )
  }

  return (
    <PageAnimation pageIcon="./media/logo-icons/laptop.svg" page="Exiting Work Page">
      <section id="workPage" className="WorkPage">
        <Navigation/>
        <section className="projects">
          {projects.map((project)=>{
            return (
              <TextCard key={project.id} title={project.name} paragraph={project.desc1} hover={()=>{
                handleMouseOver(project);
                obj = project;
                project.state="";
                return project;
              }} a={bi} claz={`textCard inView project ${project.state} ${activeItemId === project? 'unveiled' : ''}`}
              click={()=>{}}/>
            )
          })}
        </section>
        <section className="details">
          <div className="banner blurIn">
            <video autoPlay muted loop src="../media/video/vid2.mp4" type="video/mp4"></video>
            <h1>Our Work</h1>
          </div>
          <ProjectDetails project={obj}/>
        </section>
        <section className="projects-mobile">
          {projects.map((project)=>{
            return (
              <TextCard key={project.id} title={project.name} paragraph={project.desc1} hover={()=>{}} claz='project box' click={()=>{}}/>
            )
          })}
        </section>
      </section>
    </PageAnimation>
  )
}
export default Work;