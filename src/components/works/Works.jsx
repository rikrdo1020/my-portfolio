import { useState } from "react"
import "./works.scss"

export default function Works() {
  const[currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      title: "Social Media App",
      img:
        "https://cdn.dribbble.com/users/9619782/screenshots/18367562/media/16ee00c1f4f30b317c62c9c1ffa82f91.png?compress=1&resize=1200x900&vertical=top",
    },
    {
      id: 2,
      title: "Rampa UI Design",
      img:
        "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
    },
    {
      id: 3,
      title: "E-commerce Web Design",
      img:
        "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
    },
  ]
  const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`  }}>
        {data.map((d)=>
          (<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus at molestiae quas reiciendis voluptas dicta est dolorem sed.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("")}/>
    </div>
  )
}
