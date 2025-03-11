const TextCard = ({title, paragraph, claz, a, click, hover}) => {
  return (
    <span id={title} className={`${claz} ${a}`} onClick={click} onMouseEnter={hover}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </span>
  )
}
export default TextCard