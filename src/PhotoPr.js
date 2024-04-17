

function PhotoPr({bg, photoClick}) {
    return(
        <div className="flexPhotoMast">
            {bg.map(im => <img src={im} height={200} onClick={() => photoClick(im)} />)}  
        </div>

    );
   
}



export default PhotoPr;