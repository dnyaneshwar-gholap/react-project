import { Carousel } from "./Carousel"
import { bikeData } from "../../data/bikeData"
import { TrendingBikes } from "./TrendingBikes"

export const Home = ({homeMode}) => {



    return (
        <div>
            <Carousel />
            <TrendingBikes bikeInfo={bikeData} trendingBikeMode={homeMode} />
        </div>
    )
}