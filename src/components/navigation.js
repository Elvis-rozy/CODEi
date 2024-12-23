import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  {id: 0, position: "a", linkClass: "home", linkName: "Home", linkSrc: "/home", linkIconSrc: "./media/logo-icons/home.svg"},
  {id: 1, position: "b", linkClass: "services", linkName: "Services", linkSrc: "/services", linkIconSrc: "./media/logo-icons/services.svg"},
  {id: 2, position: "c", linkClass: "work", linkName: "Work", linkSrc: "/work", linkIconSrc: "./media/logo-icons/laptop2.svg"},
  {id: 3, position: "d", linkClass: "resources", linkName: "Resources", linkSrc: "/resources", linkIconSrc: "./media/logo-icons/resources.svg"},
  {id: 4, position: "e", linkClass: "blog", linkName: "Blog", linkSrc: "/blog", linkIconSrc: "./media/logo-icons/blog.svg"},
  {id: 5, position: "f", linkClass: "about", linkName: "About", linkSrc: "/about", linkIconSrc: "./media/logo-icons/about.svg"},
  {id: 6, position: "g", linkClass: "contact", linkName: "Contact", linkSrc: "/contact", linkIconSrc: "./media/logo-icons/telephone.svg"}
]

const Navigation =()=> {
  const [shown, setShown] = useState("");
  const [menuVisibility, setMenuVisibility] = useState("hideMenu");
  const [iconVisibility, setIconVisibility] = useState("hideIcons");
  const [dropdown, setdropdown] = useState("");
  const handleMenuVisibility=(value1, value2, value3)=>{
    setMenuVisibility(value1);
    setIconVisibility(value2);
    setShown(value3);
    console.log(shown);
  }
  return (
    <>
      <img className={`${dropdown} backButton`} src="./media/logo-icons/chevron-left.svg" alt="back" onClick={()=>{
          if(shown===true) {
            handleMenuVisibility("hideMenu", "hideIcons", false);
            setdropdown("");
          } else {
            setdropdown("dropdownArrow");
            handleMenuVisibility("showMenu", "showIcons", true)
          }
        }}/>
      <nav className={`${menuVisibility} navigation`}>
        {links.map((item)=>(<Link className="link" to={item.linkSrc} key={item.id} onClick={()=>(handleMenuVisibility("hideMenu", "hideIcons", false))}><img className={`${iconVisibility} ${item.linkClass}`} src={item.linkIconSrc} alt={item.linkName}/><h5 className={`${item.position} linkText`}>{item.linkName}</h5></Link>))}
      </nav>
    </>
  )
}
export default Navigation