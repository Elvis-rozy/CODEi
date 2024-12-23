const workTitle =[{id: 0, item: "W"}, {id: 1, item: "O"}, {id: 2, item: "R"}, {id: 3, item: "K"}];
const blogTitle =[{id: 0, item: "B"}, {id: 1, item: "L"}, {id: 2, item: "O"}, {id: 3, item: "G"}];
const aboutTitle =[{id: 0, item: "A"}, {id: 1, item: "B"}, {id: 2, item: "O"}, {id: 3, item: "U"}, {id: 4, item: "T"}];
const contactTitle =[{id: 0, item: "C"}, {id: 1, item: "O"}, {id: 2, item: "N"}, {id: 3, item: "T"}, {id: 4, item: "A"}, {id: 5, item: "C"},{id: 6, item: "T"}];

const Title = ({array}) => {
  if (array==="workTitle") {
    return (
      <>
        {workTitle.map(item=><span key={item.id} className="title">{item.item}</span>)}
      </>
    )
  } else if (array==="blogTitle") {
    return (
      <>
        {blogTitle.map(item=><span key={item.id} className="title">{item.item}</span>)}
      </>
    )
  } else if (array==="aboutTitle") {
    return (
      <>
        {aboutTitle.map(item=><span key={item.id} className="title">{item.item}</span>)}
      </>
    )
  } else if (array==="contactTitle") {
    return (
      <>
        {contactTitle.map(item=><span key={item.id} className="title">{item.item}</span>)}
      </>
    )
  }
}
export default Title