import { Link } from "react-router-dom";

const Button = ({imgSrc, imgAlt, linkSrc, claz, children, handleClick}) => {
  return (
    <Link className={claz} to={linkSrc} onClick={handleClick}>
      <img src={imgSrc} alt={imgAlt}/>
      <h4>{children}</h4>
    </Link>
  )
}
export default Button