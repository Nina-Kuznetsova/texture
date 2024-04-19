import { SlSocialVkontakte } from "react-icons/sl";
import Photo from "./Photo";
import PhotoPr from "./PhotoPr";




function Master({photoClick, name, vk, infoStyle, bg, bgM}) {
    
    return(
        <>
            <div className="masterBlock">   
                <h3>{name}</h3>
                <a href={vk} className="btn mast"> <SlSocialVkontakte /></a>  
                 <div>
                    <Photo bg={bg} onClick={() => photoClick(bg)} />
                </div>
                <p className="infoStyle"> {infoStyle}</p>
                <div className="photoMast">
                    <PhotoPr bg={bgM}  photoClick={photoClick} />
                </div>
            </div>
            
        </>
    );
    
}

export default Master;