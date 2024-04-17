
import { useState } from "react";
import After from "./After";
import First from "./First";
import Header from "./Header";
import Master2 from "./Master2";
import ScreenPhoto from './ScreenPhoto';


function App() {
    const [photo, setPhoto] = useState(null);

    return (
        <>
            <Header />
            <First />
            <Master2 photoClick={photo => setPhoto(photo)} />
            <After />
            <ScreenPhoto photo={photo} removePhoto={() => setPhoto(null)} />
            
        </>
    )
}

export default App;