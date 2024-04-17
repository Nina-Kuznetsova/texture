

function Photo({bg, onClick}) {
    return<div className="bgPhoto" style={{backgroundImage: `url(${bg})`}} onClick={onClick}></div>
}

export default Photo;