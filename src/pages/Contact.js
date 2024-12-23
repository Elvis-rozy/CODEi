import Navigation from "../components/navigation";
import PageAnimation from "../components/pageAnimation";
//import { useState } from "react";


const Contact =()=> {

  return (
    <PageAnimation pageIcon="./media/logo-icons/telephone.svg" page="Exiting Contact Page">
      <section id="contact Page" className="ContactPage">
        <Navigation/>
        <main id="contact" className="contactMain">
          <article className="left">
            <h1>get</h1>
          </article>
          <article className="b">
            <video autoPlay muted loop src="../media/video/vid1.mp4" type="video/mp4"></video>
            <div className="box">
              <span className="blurdIn"></span>
              <div className="row2">
                <span className="sp1 blurdIn"></span>
                <span className="sp2 blurdIn"></span>
              </div>
              <span className="blurdIn"></span>
              <div className="row4">
                <span className="sp1 blurdIn"></span>
                <span className="sp2 blurdIn"></span>
              </div>
              <span className="blurdIn"></span>
              <div className="row5">
                <span className="sp1 blurdIn"></span>
                <span className="sp2 blurdIn"></span>
              </div>
              <div className="row6">
                <span className="sp1 blurdIn"></span>
                <span className="sp2 blurdIn"></span>
              </div>
              <span className="blurdIn"></span>
            </div>
            <h1>in</h1>
          </article>
          <article className="right">
            <h1>touch</h1>
            <div className="contactIcons">
              <img className="ad blurdIn" src="./media/logo-icons/whatsapp.png" alt=""/>
              <img className="bd blurdIn" src="./media/logo-icons/gmail.png" alt=""/>
              <img className="cd blurdIn" src="./media/logo-icons/linkedin.png" alt=""/>
              <img className="dd blurdIn" src="./media/logo-icons/instagram.png" alt=""/>
            </div>
          </article>
        </main>
      </section>
    </PageAnimation>
  )
}
export default Contact