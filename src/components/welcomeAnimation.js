const codei = ["C", "O", "D", "E", "i"], moto =["Design", "Development", "Optimization"];
const WelcomeAnimation = () => {
  return (
    <article className="welcomeAnimation">
      <div className="logoBox">
        <span className="circle"><span className="midCircle"></span></span>
        <div className="coat"><span className="i"></span></div>
      </div>
      <span>
        <article>
          {codei.map((item)=>(<span key={item} className="mainName">{item}</span>))}
        </article>
        <span className="agencyMoto">
          {moto.map((item)=>(<p key={item} className="Name">{item}</p>))}
        </span>
      </span>
    </article>
  )
}
export default WelcomeAnimation