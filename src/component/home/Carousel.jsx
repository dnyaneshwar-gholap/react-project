import background1 from '../../images/background1.jpg'
import background2 from '../../images/background2.jpg'
import background3 from '../../images/background3.jpg'
import background4 from '../../images/background4.jpg'
export const Carousel = () => {



    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner container-fluid" >
                    <div className="carousel-item active">
                        <img src={background1} className="d-block w-100" alt="background1" />
                    </div>
                    <div className="carousel-item">
                        <img src={background2} className="d-block w-100" alt="background2" />
                    </div>
                    <div className="carousel-item">
                        <img src={background3} className="d-block w-100" alt="background3" />
                    </div>
                    <div className="carousel-item">
                        <img src={background4} className="d-block w-100" alt="background4" />
                    </div>
                </div>
            </div>
        </div>
    )
}