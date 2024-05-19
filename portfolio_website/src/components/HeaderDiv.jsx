import { FaInstagram,FaLinkedin,FaGithub,FaWhatsapp,FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {SiGmail} from "react-icons/si";

function HeaderDiv(){
 return(
    <div className="header-container">
        <div id="header_content">
        <h1>William Busari</h1>
        <h2>Full Stack Developer</h2>
        <p id="summary">I build very easy to use software systems with<br/> quick response times and unambiguous interfaces</p>
        <div id="social_media_logos">
        <a href="https://twitter.com/bubuDwarrior"><FaXTwitter className='social_media'/></a>
        <a href="https://www.instagram.com/busari.007/#"><FaInstagram className='social_media'/></a>
        <a href="mailto:williambusari@gmail.com"><SiGmail className="social_media" /></a>
        <a href="https://github.com/busari007"><FaGithub className='social_media'/></a>
        <a href="https://wa.me/+2348131032512"><FaWhatsapp className='social_media'/></a>
        <a href="https://discord.com/invite/EHbWHNYF"><FaDiscord className='social_media'/></a>
        </div>
        <button id="contact_me">Contact Me!</button>
        </div>
        <div id="content">
        <h4 className="content_headers">ABOUT</h4>
        <p>Since my earliest memories, technology has always been a source of fascination and wonder for me. From the moment I laid my hands on my first computer, I was captivated by the endless possibilities it offered and the way it seamlessly integrated into every aspect of our lives.</p>
        <p>As I grew older, my interest in technology only intensified, leading me to explore different fields within the vast landscape of IT. However, it was <b className="boldened_content">web development</b> that truly captured my imagination and sparked my curiosity.</p>
         <p>These days, I spend my time building dummy websites to practice my web design and development skills. I recently completed my final year project for university, which involved creating a <b className="boldened_content">Quick Response (QR)</b> code system for managing class attendance. Students enter the class, open the web app, scan the code, and get marked present. However, if they miss the 10-minute window, they get marked absent instead.</p>
        <h4 className="content_headers">EXPERIENCE AND SKILLS</h4>
        <p>I am a <b className="boldened_content">full-stack developer</b> specializing in <b className="boldened_content">React.js</b> for frontend development and <b className="boldened_content">Express.js</b> for backend development.<br/>I have <b className="boldened_content">three</b> years of experience with both, along with proficiency in <b className="boldened_content">HTML, CSS, JavaScript, and MySQL</b>.</p>
        <p>I interned at a tech company in the UK called <b className="boldened_content">First Stack Ltd</b> for six months, where I was trained in the execution of web development projects.<br/>The knowledge and experience I gained there were invaluable in the development of my QR attendance system project.</p>
        <h4 className="content_headers">EDUCATION</h4>
        <p>I am a recent graduate of <b className="boldened_content">Babcock University's School of Computing Sciences</b>. I enrolled in January 2021 and graduated in May 2024. The school taught me a lot about managing projects and gathering requirements. However, learning the programming languages was largely a personal effort.</p>
         <h4 className="content_headers">PROJECTS</h4>
        <p>Some projects Ive done in my spare time</p>
        </div>
        <div id="rectangle1"></div>
        <div id="rectangle2"></div>
        <div id="rectangle3"></div>
    </div>
 );
}
export default HeaderDiv;