import { Link } from "react-router-dom";
import "./sass/style.scss";
import TextCard from "./components/textCard";
import Title from "./components/title";
import WelcomeAnimation from "./components/welcomeAnimation";
import PageAnimation from "./components/pageAnimation";

const aboutCards = [{id:0, title:14, pg:"Projects done and delivered for various known brands"}, {id:1, title:12, pg:"Projects done and delivered for various known brands"}, {id:2, title:47, pg:"Projects done and delivered for various known brands"}];
const icons =[ {id: 0, src: "./media/logo-icons/android.svg"}, {id: 1, src: "./media/logo-icons/code-slash.svg"}, {id: 2, src: "./media/logo-icons/laptop.svg"}];
const list =[ {id: "1st", item: "Mobile app development"}, {id: "2nd", item: "Web design and development"}, {id: "3rd", item: "Branding and digital strategies"}, {id: "4th", item: "Code optimization and debugging"}];

function App() {
  return (
    <PageAnimation pageIcon="./media/logo-icons/home.svg" page="Home">
      <WelcomeAnimation/>
      <main className="Home grid">
        <article className="logo"><img src="../media/logo-icons/logo.png" alt="logo"/></article>
        <aside className="leftGrid grid">
          <section className="topLeftGrid grid">
            <Link to="/services" id="homeServices" className="ServicesSection grid">
              <article className="topServices shape blurIn">
                <article className="titleBox topLeft">
                  <span className="title">SERVICES</span>
                </article>
                {icons.map(icon=><img key={icon.id} src={icon.src}alt=""/>)}
              </article>
              <article className="bottomServices grid">
                <article className="slideShow shape blurIn"></article>
                <ul className="list shape blurIn">
                  {list.map(item=><li key={item.id}><strong>{item.id}</strong>{item.item}</li>)}
                </ul>
              </article>
            </Link>
            <Link to="/work" id="homeWork" className="workSection shape inView">
              <article className="titleBox align bottom boldFont">
                <Title array="workTitle"/>
              </article>
            </Link>
          </section>
          <section className="btmLeftGrid grid">
            <Link to="/blog" id="homeBlog" className="blogSection shape blurIn">
              <article className="titleBox boldFont">
                <Title array="blogTitle"/>
              </article>
            </Link>
            <Link to="/about" id="homeAbout"  className="aboutSection shape inView">
              <article className="titleBox align bottomRight boldFont">
                <Title array="aboutTitle"/>
              </article>
              <article className="textCarousel">
                <div className="textLineup">
                  {aboutCards.map(card=><TextCard key={card.id} title={card.title} paragraph={card.pg}/>)}
                </div>
              </article>
            </Link>
          </section>
        </aside>
        <aside className="rightGrid grid">
          <Link to="/contact" id="homeContact" className="contactSection grid">
            <article className="contctLeft shape blurIn">
              <h1 className="bigText a">CO</h1>
            </article>
            <article className="contctRight shape blurIn">
              <h1 className="bigText b">DEi</h1>
              <article className="titleBox align btmRight boldFont pill">
                <Title array="contactTitle"/>
              </article>
            </article>
          </Link>
        </aside>
      </main>
    </PageAnimation>
  );
}
export default App;