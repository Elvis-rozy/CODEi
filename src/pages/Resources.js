import Navigation from "../components/navigation";
import PageAnimation from "../components/pageAnimation";

const Resources =()=> {
  return (
    <PageAnimation pageIcon="./media/logo-icons/resources.svg" page="Our Resources">
      <section id="resourcesPage" className="ResourcesPage grid">
        <Navigation/>
      </section>
    </PageAnimation>
  )
}
export default Resources