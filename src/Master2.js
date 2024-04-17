import { SlSocialVkontakte } from "react-icons/sl";
import Photo from "./Photo";
import PhotoPr from "./PhotoPr";


import smirn1 from './smirn1.jpg'
import smirnPr from './smirnPr.jpg'
import smirnPr2 from './smirnPr2.jpg'
import smirnPr3 from './smirnPr3.jpg'
import smirnPr4 from './smirnPr4.jpg'
import smirnPr5 from './smirnPr5.jpg'

import aplet1 from './aplet1.jpg'
import apletPr from './apletPr.jpg'
import apletPr2 from './apletPr2.jpg'
import apletPr3 from './apletPr3.jpg'
import apletPr4 from './apletPr4.jpg'
import apletPr5 from './apletPr5.jpg'

import vas1 from './vas1.jpg'

import ozz1 from './ozz1.jpg'
import ozzPr from './ozzPr.jpg'
import ozzPr2 from './ozzPr2.jpg'
import ozzPr3 from './ozzPr3.jpg'
import ozzPr4 from './ozzPr4.jpg'
import ozzPr5 from './ozzPr5.jpg'





function Master2 ({photoClick}) {
    return(
        <>
        
            <div className="masterBox" >
                <div className="masterBlock">
                    
                     <h3>Дмитрий Смирнов</h3>
                       <a href="https://vk.com/smirnoww" className="btn mast"> <SlSocialVkontakte /></a>  
                    <div>
                        <Photo bg={smirn1} onClick={() => photoClick(smirn1)} />
                    </div>
                    <span> Реализм, Графика</span>
                    <div className="photoMast">
                    <PhotoPr bg={[smirnPr, smirnPr2, smirnPr3,smirnPr4,smirnPr5]}  photoClick={photoClick} />
                    </div>
                    
                    
                </div>

                <div className="masterBlock">
                    
                    <h3>Екатерина Аплетаева</h3>
                    <a href="https://vk.com/kate_apl" className="btn mast"> <SlSocialVkontakte /></a>  
                    <div>
                        <Photo bg={aplet1} onClick={() => photoClick(aplet1)} />
                    </div>
                    <span>Реализм, Графика  </span>
                    <div className="photoMast">
                        <PhotoPr bg={[apletPr, apletPr2, apletPr3, apletPr4, apletPr5]} photoClick={photoClick} />
                    </div>
                        
                </div>

                <div className="masterBlock">
                    
                    <h3>Дмитрий Василенко</h3>
                    <a href="https://vk.com/stepta2" className="btn mast"> <SlSocialVkontakte /></a>
                     <div>
                        <Photo bg={vas1} onClick={() => photoClick(vas1)}/>
                    </div>
                    <span> Реализм, Графика </span>
                    <div className="photoMast">
                        <PhotoPr bg={[smirnPr, smirnPr2, smirnPr3,smirnPr4,smirnPr5,]} photoClick={photoClick} />
                    </div>
                    
                </div>
                

                <div className="masterBlock">
                    
                    <h3>Eвгений Ozz</h3>
                    <a href="https://vk.com/ozz_one" className="btn mast"> <SlSocialVkontakte /></a>
                    <div>
                       <Photo bg={ozz1} onClick={() => photoClick(ozz1)} />
                   </div>
                   <span>Реализм, Графика </span>
                    <div className="photoMast">
                       <PhotoPr bg={[ozzPr, ozzPr2, ozzPr3, ozzPr4, ozzPr5,]}  photoClick={photoClick} />
                     </div>
                   
                   
               </div>

               <div className="masterBlock">
                    
                     <h3>Анна Медивх</h3>
                     <a href="https://vk.com/kate_apl" className="btn mast"> <SlSocialVkontakte /></a>
                      <div>
                        <Photo bg={aplet1} onClick={() => photoClick(aplet1)}  />
                    </div>
                    <span> Реализм, Графика</span>
                    <div className="photoMast">
                        <PhotoPr bg={[apletPr, apletPr2, apletPr3, apletPr4, apletPr5]} photoClick={photoClick} />
                    </div>
                    
                </div>
            </div>
        
        </>
    );
}



export default Master2;