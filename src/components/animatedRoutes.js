import {  Routes, Route, useLocation } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Work from '../pages/Work';
import Resources from "../pages/Resources";
import Blog from '../pages/Blog';
import About from "../pages/About";
import Contact from "../pages/Contact";
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path= "/" element={<App/>} />
        <Route path= "home" element={<Home/>} />
        <Route path= "services" element={<Services/>} />
        <Route path= "work" element={<Work/>} />
        <Route path= "resources" element={<Resources/>} />
        <Route path= "blog" element={<Blog/>} />
        <Route path= "about" element={<About/>} />
        <Route path= "contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes