import { useState } from "react";

export const TrendingBikes = ({ bikeInfo, trendingBikeMode }) => {

    const [index, setIndex] = useState(0);
    const trendingBikes = bikeInfo.filter(bike => {
        return bike.trending === "yes";
    })

    const selectedBike = trendingBikes[index];


    const handlePreviousClick = () => {
        index > 0 ? setIndex(index - 1) : setIndex(trendingBikes.length - 1)
    }

    const handleNextClick = () => {
        index < trendingBikes.length - 1 ? setIndex(index + 1) : setIndex(0)
    }


    return (
        <div className="m-3">
            <h2 style={{ color: trendingBikeMode === 'light' ? 'black' : 'white' }} className="text-center">Bikes in Spotlight</h2>
            <div className="row justify-content-center mt-3 text-center">
                <div className="col-lg-5" style={{ color: trendingBikeMode === 'light' ? 'black' : 'white' }}>
                    <img className="w-100 img-thumbnail" src={selectedBike.image} alt={selectedBike.model} />
                    <h3 className="mt-2">{selectedBike.model}</h3>
                </div>
                
                <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-secondary mx-2" onClick={handlePreviousClick} >Previous</button>
                    <button className="btn btn-secondary mx-2" onClick={handleNextClick}>Next</button>
                </div>
            </div>


        </div>
    )
}