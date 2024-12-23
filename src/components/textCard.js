const TextCard = ({title, paragraph, claz, a, handleClick, hover}) => {
  return (
    <span id={title} className={`textCard inView ${claz} ${a}`} onClick={handleClick} onMouseEnter={hover}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </span>
  )
}
export default TextCard