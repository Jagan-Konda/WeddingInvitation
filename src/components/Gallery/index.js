import './index.css'
const Gallery = () => {
    return (
        <div className="gallery-wrapper" id="gallery">
            <h2 className="gallery-title">Album</h2>
            <div className="album-spread">
                <div className="photo-frame">
                    <img
                        src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750358855/ca666371a549e904160de33b9807b419fc3644a2_qbxrsk.jpg"
                        alt="Left Couple"
                        className="gallery-photo"
                    />
                </div>

                <img
                    src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750359047/Group_57_rtaqsj.png"
                    alt="Album Clip"
                    className="album-clip"
                />

                <div className="photo-frame">
                    <img
                        src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750358917/87acc48dc0cf71402beab53e4776fe54490a4e57_h1yo7x.jpg"
                        alt="Right Couple"
                        className="gallery-photo"
                    />
                </div>
            </div>
        </div>
    );

}

export default Gallery


