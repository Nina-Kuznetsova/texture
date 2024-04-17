import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";

function Header() {
    return (
        <>
             
        <h1 className="head">TEXTURE TATTOO STUDIO</h1>
            <div className="btn-cont">
                <button className="btn">Перед сеансом</button>
                <button className="btn">Наши мастера</button>
                <button className="btn">После сеанса</button>
                <a className="btn icn" href="https://t.me/texturetattoo"><FaTelegram /></a>
                <a className="btn icn" href="https://vk.com/texture_tattoostudio"><SlSocialVkontakte /></a>
                <a className="btn icn" href="https://www.instagram.com/texture_tattoostudio?igsh=bWF1Nm1kNDdxbWN0"><AiFillInstagram /></a>
            </div>
            
        </>
    )
    
};

export default Header;
