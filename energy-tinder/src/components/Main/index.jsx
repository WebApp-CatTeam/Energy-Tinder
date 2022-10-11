import './index.css';
import Swiper from "../Swiper";

const Main = () => {
    return (
        <div className="main">
            <div className="main-center">
                <Swiper />
                <div className="button-container">
                    <button className="button dislike-button" > <p>dislike</p> </button>
                    <button className="button idk-button" > <p>never tried</p> </button>
                    <button className="button like-button" > <p>like</p> </button>
                </div>
            </div>
        </div>


    )
}

export default Main;