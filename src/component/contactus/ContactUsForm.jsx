import { useState } from "react"

export const ContactUsForm = ({ mode }) => {

    const [person, setPerson] = useState({
        name: '',
        mobileNo: '',
        email: '',
        bikeName: ''
    })

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (e) => {
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    const handleMobileNoChange = (e) => {
        setPerson({
            ...person,
            mobileNo: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    const handleBikeNameChange = (e) => {
        setPerson({
            ...person,
            bikeName: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)

    }

    const handleResetClick = () => {
        setPerson({
            ...person,
            name: '',
            mobileNo: '',
            email: ''
        })
        setSubmitted(false)
    }


    return (
        <div className="container mt-4" style={{ color: mode === 'light' ? 'black' : 'white' }}>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="">
                    <div >
                        <label className="form-label" htmlFor="">Enter your name:</label>
                        <input className="form-control" type="text" value={person.name} onChange={handleNameChange} required />

                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Enter your whatsapp number:</label>
                        <input className="form-control" type="number" value={person.mobileNo} onChange={handleMobileNoChange} required pattern="[0-9]{10}"/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Enter your email:</label>
                        <input className="form-control" type="email" value={person.email} onChange={handleEmailChange} required />

                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Enter bike name:</label>
                        <input className="form-control" type="text" value={person.bikeName} onChange={handleBikeNameChange} required />

                    </div>
                    <div>
                        <button className="btn btn-success mt-2" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center mt-4" >
                {
                    submitted &&
                    <div >
                        <h4>Submitted Successfully</h4>
                        <p>Thank you <b>{person.name}</b> showing interest in {person.bikeName}. You will receive details of {person.bikeName} shortly on your whatsapp and email.</p>
                        <div>
                            <b>Your Name: </b>{person.name}<br />
                            <b>Your Mobile No.: </b>{person.mobileNo}<br />
                            <b>Your Email.: </b>{person.email}<br />
                            <b>Bike:</b>{person.bikeName}
                        </div>
                        <div>
                            <button className="btn btn-success mt-2" onClick={handleResetClick}>Done</button>
                        </div>

                    </div>

                }
            </div>

        </div>
    )
}