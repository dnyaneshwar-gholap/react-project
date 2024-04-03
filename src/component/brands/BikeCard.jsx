import { useState } from "react"

export const BikeCard = ({ bike, bikeMode }) => {

    const [showMoreDetails, setShowMoreDetails] = useState(false);

    return (
        <div>
            <div className="mb-4">

                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-thumbnail w-100" src={bike.image} alt="" />
                    </div>
                    <div className="col-lg-4 d-flex align-items-center" style={{ color: bikeMode === 'light' ? 'black' : 'white' }}>

                        <div className="w-100">
                            <h3>{bike.model}</h3>
                            <h4>{bike.brand}</h4>
                            <h5>{"₹ " + bike.price}</h5>
                            <button className="btn btn-primary" onClick={() => setShowMoreDetails(!showMoreDetails)}>{showMoreDetails ? "Hide" : "Show"} Details</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        showMoreDetails &&
                        <div className="mt-2">
                            <b style={{ color: bikeMode === 'light' ? 'black' : 'white' }}>Details:</b>
                            <div className="table-responsive-sm ">
                                <table className="table table-secondary">

                                    <tbody>
                                        <tr>
                                            <th>Model:</th>
                                            <td>{bike.model}</td>
                                        </tr>
                                        <tr>
                                            <th>Price:</th>
                                            <td>{bike.price}</td>
                                        </tr>
                                        <tr>
                                            <th>Mileage:</th>
                                            <td>{bike.specification.mileage}</td>
                                        </tr>
                                        <tr>
                                            <th>Engine:</th>
                                            <td>{bike.specification.engine}</td>
                                        </tr>
                                        <tr>
                                            <th>Power:</th>
                                            <td>{bike.specification.power}</td>
                                        </tr>
                                        <tr>
                                            <th>Torque:</th>
                                            <td>{bike.specification.torque}</td>
                                        </tr>
                                        <tr>
                                            <th>Kerb Weight:</th>
                                            <td>{bike.specification.kerbWeight}</td>
                                        </tr>
                                        <tr>
                                            <th>Brakes:</th>
                                            <td>{bike.specification.brakes}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}