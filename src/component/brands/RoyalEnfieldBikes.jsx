import { BikeCard } from "./BikeCard";
import { SearchBox } from "./SearchBox";
import { useState } from "react";

export const RoyalEnfieldBikes = ({bikeInfo, bikeMode}) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const search = () => {
        const searchStringLower = text.toLowerCase();
        return bikeInfo.filter(bike => (
            bike.model.toLowerCase().includes(searchStringLower) &&
            bike.brand === 'royalenfield'

        ))
    }

    const royalEnfieldBikes = search();

   
    return(
        <div className="container mt-4">
            <div>
                <SearchBox updateText={handleChange} searchItem={text}/>
            </div>
            {
                royalEnfieldBikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} bikeMode={bikeMode} />
                ))
            }
        </div>
    )
} 