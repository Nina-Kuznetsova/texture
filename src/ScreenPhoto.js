import './ScreenPhoto.css';

function ScreenPhoto({photo, removePhoto}) {
    return photo && (
        <div class="ScreenPhoto-bg">
            <img src={photo} class="ScreenPhoto-img" />
            <button class="ScreenPhoto-close" onClick={removePhoto}>X</button>
        </div>
    );
}

export default ScreenPhoto;