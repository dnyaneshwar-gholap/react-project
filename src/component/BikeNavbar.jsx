import { Link, Outlet } from 'react-router-dom'
export const BikeNavbar = ({ handleToggleMode, mode }) => {

    const logoStyle = { color: 'dodgerblue', fontFamily: 'sherif', fontStyle: 'italic', fontSize: '22px' };

    const navItemStyle = { color: mode === 'light' ? 'black' : 'white' };

    const toggleButtonStyle = { color: mode === 'light' ? 'black' : 'white' };
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${mode}`} >
                <div className="container-fluid">

                    <b className="navbar-brand" href="#" style={logoStyle}>ridehub</b>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{ backgroundColor: mode === 'dark' && 'white' }} className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-semibold">
                            <li className="nav-item" >
                                <Link className='nav-link' to="/" style={navItemStyle}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="bikeList" style={navItemStyle}>Bikes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="popularBrands" style={navItemStyle}>Brands</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="reviews" style={navItemStyle}>Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="aboutUs" style={navItemStyle}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="contactUs" style={navItemStyle}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="form-check form-switch" onClick={handleToggleMode}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={toggleButtonStyle}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
                    </div>

                </div>
            </nav>
            <Outlet />
        </div>
    )
}