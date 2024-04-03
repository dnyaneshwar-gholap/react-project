import { useState } from "react";
import { BikeCard } from "./BikeCard";
import { SearchBox } from "./SearchBox";
export const BikeList = ({ bikeInfo, bikeListMode }) => {

    const [text,setText] = useState('');    

    const searchBikes = () => {
        const searchTerm = text.toLowerCase();
        return (
            bikeInfo.filter(bike => (
                bike.model.toLowerCase().includes(searchTerm) ||
                bike.brand.toLowerCase().includes(searchTerm)
            ))
        )
    }

    const filteredBikes = searchBikes();

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="container">
            <SearchBox searchItem={text} updateText={handleChange}/>
            {filteredBikes.map(bike => (
                <BikeCard bike={bike} key={bike.id} bikeListMode={bikeListMode}/>
            ))}

        </div>
    )
}