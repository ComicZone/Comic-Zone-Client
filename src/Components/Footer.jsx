import Logo from "../Assests/images/comiczonelogo.svg"
import "./Footer.css";
import {InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo,YoutubeLogo}from "phosphor-react";


export default function Footer () {
    return (
        <footer className="footer">
      <div className="text">
        
        <img src={Logo} alt="Logo" />
        <h2>All of the content on comic Zone is protected by copyright laws which makes any unlawful use, sharing or duplication illegal.</h2>
        

      </div>
      <div class="text1">
      <a href="#">Privacy</a>         
     < a href="#">Terms of Use</a>
     < a href="#">Help/FAQs</a>        

      </div>
         <div  className="icons"><h3>follow ComicZone</h3>
            <div class="follow">
               < a href="#">
                <InstagramLogo size={32}/></a>
                < a href="#">
                <FacebookLogo size={32}/>
                </a>
                < a href="#">
                <TwitterLogo size={32}/>
                </a>
                < a href="#">
                <LinkedinLogo size={32}/>
                </a>
                < a href="#">
                <YoutubeLogo size={32}/>
                </a>

                
            </div>
            <div className="copyright">
            <p>CopyRight&copy; {new Date().getFullYear()} </p>
            </div>
            </div>
    </footer>
    
    );
}
