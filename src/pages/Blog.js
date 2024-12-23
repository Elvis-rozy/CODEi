import Navigation from "../components/navigation";
import PageAnimation from "../components/pageAnimation";

const Blog =()=> {

  return (
    <PageAnimation pageIcon="./media/logo-icons/blog.svg" page="Exiting Blog Page">
      <section id="blogPage" className="BlogPage">
        <Navigation/>
        <main>
          <section>
            <h1>Main Title</h1>
            <img className="phone" alt="" src="./media/images/14-mockup.png" />
            <p className="blogDetails">Blog details</p>
            <p className="date">blog date</p>
            <p className="author">blog author</p>
          </section>
          <div className="blogList">
            <h4>Blogs</h4>
            <ul>
              <li>blog 1</li>
              <li>blog 2</li>
              <li>blog 3</li>
              <li>blog 4</li>
            </ul>
          </div>
        </main>
      </section>
    </PageAnimation>
  )
}
export default Blog;