import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";

function Header() {
    return (
        <>
             
        <h1 className="head">TEXTURE TATTOO STUDIO</h1>
            <div className="btn-cont">
                <a href="#befor_the_session" className="btn">Перед сеансом</a>
                <a href="#our_masters" className="btn">Наши мастера</a>
                <a href="#after_the_session" className="btn">После сеанса</a>
                <div className="icnBox">
                    <a className="btn icn" href="https://t.me/texturetattoo"><FaTelegram /></a>
                    <a className="btn icn" href="https://vk.com/texture_tattoostudio"><SlSocialVkontakte /></a>
                    <a className="btn icn" href="https://www.instagram.com/texture_tattoostudio?igsh=bWF1Nm1kNDdxbWN0"><AiFillInstagram /></a>
                </div>
            </div>
            
        </>
    )
    
};

export default Header;
