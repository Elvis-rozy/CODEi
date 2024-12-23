const List =({mainClass, subClass, input})=>{
  return (
    <ul className={mainClass}>
      {input.map((item)=>(<li  key={item} className={subClass}>{item}</li>))}
  </ul>
  )
}
export default List