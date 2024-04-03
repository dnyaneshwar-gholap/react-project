import { useState } from "react"
import { SearchBox } from "./SearchBox";
import { BikeCard } from "./BikeCard";

export const BajajBikes = ({ bikeInfo, bikeMode }) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const search = () => {
        const searchStringLower = text.toLowerCase();
        return bikeInfo.filter(bike => (
            bike.model.toLowerCase().includes(searchStringLower) &&
            bike.brand === 'bajaj'

        ))
    }

    const bajajBikes = search();

    return (
        <div className="container mt-4">
            
            <div>
                <SearchBox updateText={handleChange} searchItem={text}/>
            </div>
            {
                bajajBikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} bikeMode={bikeMode} />
                ))
            }
        </div>
    )
} 