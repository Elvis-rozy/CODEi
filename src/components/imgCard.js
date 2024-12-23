const ImgCard = ({imgSrc, imgAlt, title, paragraph, handleClick}) => {
  return (
    <span className="imgCard" onClick={handleClick}>
      <img src={imgSrc} alt={imgAlt}/>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </span>
  )
}
export default ImgCard