
import Navigation from "../components/navigation";
import TextCard from "../components/textCard";
import PageAnimation from "../components/pageAnimation";
import { useState } from "react";

const Work =()=> {
  const [projects, setProjects] = useState([
    {id: "01", num: 1, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/3iftee.jpg"},
    {id: "02", num: 2, name: "bigBite", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/bigbite.jpg"},
    {id: "03", num: 3, name: "Decor", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/decor.jpg"},
    {id: "04", num: 4, name: "FoodLENS", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/foodlens.jpg"},
    {id: "05", num: 5, name: "Gears", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/gears.jpg"},
    {id: "06", num: 6, name: "Kiqx", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/kiqx.jpg"},
    {id: "07", num: 7, name: "PixelMind", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/pixelmind.png"},
    {id: "08", num: 8, name: "Tuneflix", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/tuneflix.jpg"},
    {id: "09", num: 9, name: "Walls", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/images/walls.png"},
    {id: "10", num: 10, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "img"},
    {id: "11", num: 11, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "img"},
    {id: "12", num: 12, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "img"},
  ]);

  const [clicked, setClicked] = useState('01');
  const [activeItemId, setActiveItemId] = useState('unveiled');
  const [bi, setBi] = useState('unveiled');
  const handleMouseOver = (itemId) => {
    setActiveItemId(itemId);
    setBi('veiled');
  }

  const ProjectDetails =({project})=>{
    console.log(project)
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
              <TextCard key={project.id} title={project.name} paragraph={project.desc1} hover={()=> handleMouseOver(project)} a={bi} claz={`project ${activeItemId === project? 'unveiled' : ''}`}
              handleClick={()=>{setClicked(1);}}/>
            )
          })}
        </section>
        <section className="details">
          <div className="banner blurIn">
            <video autoPlay muted loop src="../media/video/vid2.mp4" type="video/mp4"></video>
            <h1>Our Work</h1>
          </div>
          <ProjectDetails project={projects}/>
        </section>
      </section>
    </PageAnimation>
  )
}
export default Work;
/*

import Navigation from "../components/navigation";
import TextCard from "../components/textCard";
import PageAnimation from "../components/pageAnimation";
import { useState } from "react";

const Work =()=> {
  const [clicked, setClicked] = useState(1);
  const [A, setA] = useState("unveiled"), [B, setB] = useState("veiled"), [C, setC] = useState("veiled"), [D, setD] = useState("veiled"),  [E, setE] = useState("veiled"),  [F, setF] = useState("veiled"),  [G, setG] = useState("veiled"), [H, setH] = useState("veiled"),  [I, setI] = useState("veiled"),  [J, setJ] = useState("veiled"),  [K, setK] = useState("veiled"),  [L, setL] = useState("veiled");

  const handleVeil=(a, b, c, d, e, f, g, h, i, j, k, l)=>{
    if (a||b||c||d||e||f||g||k||i||j||k=== "unveiled"){
      setA("veiled"); setB("veiled"); setC("veiled"); setD("veiled");
      setE("veiled"); setF("veiled"); setG("veiled"); setH("veiled");
      setI("veiled"); setJ("veiled"); setK("veiled"); setL("veiled");
    }
  }

  const ProjectA = {
    id: "01",
    num: 1,
    name: "3iftee",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/3iftee.jpg"
  },
  ProjectB = {
    id: "02",
    num: 2,
    name: "bigBite",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/bigbite.jpg"
  },
  ProjectC = {
    id: "03",
    num: 3,
    name: "Decor",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/decor.jpg"
  },
  ProjectD = {
    id: "04",
    num: 4,
    name: "FoodLENS",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/foodlens.jpg"
  },
  ProjectE = {
    id: "05",
    num: 5,
    name: "Gears",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/gears.jpg"
  },
  ProjectF = {
    id: "06",
    num: 6,
    name: "Kiqx",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/kiqx.jpg"
  },
  ProjectG = {
    id: "07",
    num: 7,
    name: "PixelMind",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/pixelmind.png"
  },
  ProjectH = {
    id: "08",
    num: 8,
    name: "Tuneflix",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/tuneflix.jpg"
  },
  ProjectI = {
    id: "09",
    num: 9,
    name: "Walls",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "../media/images/walls.png"
  },
  ProjectJ = {
    id: "10",
    num: 10,
    name: "3iftee",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "img"
  },
  ProjectK = {
    id: "11",
    num: 11,
    name: "3iftee",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "img"
  },
  ProjectL = {
    id: "12",
    num: 12,
    name: "3iftee",
    desc1: "bla bla bla",
    desc2: "bla bla bla",
    collab1: "img",
    collab2: "img",
    previewImg: "img"
  };

  const CallProjectDetails =()=> {
    if (clicked === 1) {return <ProjectDetails project={ProjectA}/>
    } else if (clicked === 2) {return <ProjectDetails project={ProjectB}/>
    } else if (clicked === 3) {return <ProjectDetails project={ProjectC}/>
    } else if (clicked === 4) {return <ProjectDetails project={ProjectD}/>
    } else if (clicked === 5) {return <ProjectDetails project={ProjectE}/>
    } else if (clicked === 6) {return <ProjectDetails project={ProjectF}/>
    } else if (clicked === 7) {return <ProjectDetails project={ProjectG}/>
    } else if (clicked === 8) {return <ProjectDetails project={ProjectH}/>
    } else if (clicked === 9) {return <ProjectDetails project={ProjectI}/>
    } else if (clicked === 10) {return <ProjectDetails project={ProjectJ}/>
    } else if (clicked === 11) {return <ProjectDetails project={ProjectK}/>
    } else if (clicked === 12) {return <ProjectDetails project={ProjectL}/>
    }
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
    <PageAnimation pageIcon="./media/logo-icons/laptop.svg" page="Recent projects">
      <section id="workPage" className="WorkPage">
        <Navigation/>
        <section className="projects">
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setA("unveiled");}}
            handleClick={()=>{setClicked(1);}} claz={A} title="3iftee" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setB("unveiled");}}
            handleClick={()=>{setClicked(2);}} claz={B} title="BigBite" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setC("unveiled");}}
            handleClick={()=>{setClicked(3);}} claz={C} title="Decor" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setD("unveiled");}}
            handleClick={()=>{setClicked(4);}} claz={D} title="FoodLENS" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setE("unveiled");}}
            handleClick={()=>{setClicked(5);}} claz={E} title="Gears" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setF("unveiled");}}
            handleClick={()=>{setClicked(6);}} claz={F} title="Kiiqx" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setG("unveiled");}}
            handleClick={()=>{setClicked(7);}} claz={G} title="PixelMind" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setH("unveiled");}}
            handleClick={()=>{setClicked(8);}} claz={H} title="Tuneflix" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setI("unveiled");}}
            handleClick={()=>{setClicked(9);}} claz={I} title="Walls" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setJ("unveiled");}}
            handleClick={()=>{setClicked(10);}} claz={J} title="" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setK("unveiled");}}
            handleClick={()=>{setClicked(11);}} claz={K} title="" paragraph="bla bla bla"/>
          <TextCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G, H, I, J, K, L); setL("unveiled");}}
            handleClick={()=>{setClicked(12);}} claz={L} title="" paragraph="bla bla bla"/>
        </section>
        <section className="details">
          <div className="banner blurIn">
            <video autoPlay muted loop src="../media/video/vid2.mp4" type="video/mp4"></video>
            <h1>Our Work</h1>
          </div>
          <CallProjectDetails/>
        </section>
      </section>
    </PageAnimation>
  )
}
export default Work*/