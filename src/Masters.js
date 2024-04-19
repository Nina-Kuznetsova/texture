import { useState } from "react";
import Master from "./Master";
import ScreenPhoto from './ScreenPhoto';


import smirn1 from './media/smirn1.jpg'
import smirnPr from './media/smirnPr.jpg'
import smirnPr2 from './media/smirnPr2.jpg'
import smirnPr3 from './media/smirnPr3.jpg'
import smirnPr4 from './media/smirnPr4.jpg'
import smirnPr5 from './media/smirnPr5.jpg'

import aplet1 from './media/aplet1.jpg'
import apletPr from './media/apletPr.jpg'
import apletPr2 from './media/apletPr2.jpg'
import apletPr3 from './media/apletPr3.jpg'
import apletPr4 from './media/apletPr4.jpg'
import apletPr5 from './media/apletPr5.jpg'

import vas1 from './media/vas1.jpg'

import ozz1 from './media/ozz1.jpg'
import ozzPr from './media/ozzPr.jpg'
import ozzPr2 from './media/ozzPr2.jpg'
import ozzPr3 from './media/ozzPr3.jpg'
import ozzPr4 from './media/ozzPr4.jpg'
import ozzPr5 from './media/ozzPr5.jpg'






function Masters () {
    const [photo, setPhoto] = useState(null);
    return(
        <>
        
            <div className="masterBox" >
                
                <Master photoClick={photo => setPhoto(photo)} name={"Дмитрий Смирнов"} 
                    vk={"https://vk.com/smirnoww"} infoStyle={"Реализм, Графика"} bg={smirn1} bgM={[smirnPr, smirnPr2,smirnPr3, smirnPr4,smirnPr5]}/>

                <Master photoClick={photo => setPhoto(photo)} name={"Екатерина Аплетаева"} 
                    vk={"https://vk.com/kate_apl"} infoStyle={"Реализм, Графика"} bg={aplet1} bgM={[apletPr, apletPr2, apletPr3, apletPr4, apletPr5]}/>

                <Master photoClick={photo => setPhoto(photo)} name={"Дмитрий Василенко"} 
                    vk={"https://vk.com/stepta"} infoStyle={"Реализм, Графика"} bg={vas1} bgM={[apletPr, apletPr2, apletPr3, apletPr4, apletPr5]}/>

                <Master photoClick={photo => setPhoto(photo)} name={"Eвгений Ozz"} 
                    vk={"https://vk.com/ozz_one"} infoStyle={"Реализм, Графика"} bg={ozz1} bgM={[ozzPr, ozzPr2, ozzPr3, ozzPr4, ozzPr5]}/>

                <Master photoClick={photo => setPhoto(photo)} name={"Анна Медивх"} 
                    vk={"https://vk.com/kate_apl"} infoStyle={"Реализм, Графика"} bg={aplet1} bgM={[apletPr, apletPr2, apletPr3, apletPr4, apletPr5]}/>
                    
                <ScreenPhoto photo={photo} removePhoto={() => setPhoto(null)} />
            </div>
        
        </>
    );
}



export default Masters;