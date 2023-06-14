import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
const Services = () => {
  return (
    <div className='services'>
<div className='awesome'>
    <span> My Awesome</span>
    <span> Services </span>
    <spane> I specialize in React.js development, offering services such as building interactive SPAs, <br/>
        managing state with Redux or Context API and integrating APIs</spane>
        <a href='resume.pdf'download="kavindu.pdf">
                <button className='button s-button'> Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}>

            </div>
</div>
<div className='cards'>
  <div style={{left:'14rem'}}>
    <Card
    emoji ={HeartEmoji}
    heading = {'Design'}
    details ={"Figma, Sketch, Photoshop $ Empathy mapping"}
    />
  </div>
  <div style={{top:'12rem',left:'-4rem'}}>
<Card
emoji={Glasses}
heading={'Developer'}
details={"HTML,CSS,Javascript,React $Bootstrap"}
/>
  </div>
  <div style={{top:'19rem',left:'12rem'}}>
    <Card
    emoji={Humble}
    heading={"UI/UX"}
    details={'Create a visually engaging and intuitive web design with a clear hierarchy and responsive layout'}
/>
  </div>
  <div className='blur s-blur' style={{background:'var(--purple)'}}>

  </div>
</div>
    </div>
  )
}

export default Services