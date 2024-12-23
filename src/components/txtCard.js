const TxtCard = ({title, paragraph, claz}) => {
  return (
    <span className={`textCard ${claz}`}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </span>
  )
}
export default TxtCard