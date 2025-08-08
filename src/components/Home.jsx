import React from 'react';
import './Home.css';
import KeslaImg from '../assests/Kesla.png'
import { FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";





const Home = () => {
  return (
 
   <div className="hero" id='home'>
       <img src={KeslaImg} alt="Kesla" className="profile-img"/>
        <h1>HI, I AM KESLA CHIME</h1>
        <p>WEBSITE DEVELOPER, DATA ENTRY SPECIALIST / AWS CLOUD ENTHUSIAST</p>

        <div className="buttons">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="btn" target="_blank"> <MdOutlineMarkEmailRead />
         <br />Email Me</a>
          <a href="https://github.com/keslanaeto" className="btn" target="_blank"> <FaGithub />
          <br /> GitHub</a>
          <a href="https://www.linkedin.com/in/chime-kesla-291706317" className="btn" target="_blank"> <FaLinkedin />
          <br />LinkedIn</a>
        </div>

            <div className='resume'>
              <a href="https://drive.google.com/file/d/1xFgLSH0r1tHgGV20bFt0Dzm_SxD1Xh2o/view?usp=sharing">GET C.V</a>

           </div>
      </div>

  );
};

export default Home;
